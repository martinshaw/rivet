<?php

namespace App\Filament\Resources\Forms\Resources\FormFields\Schemas;

use App\Enums\FormFieldType;
use App\Models\FormField;
use Filament\Forms\Components\Builder;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;

class FormFieldForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make()
                    ->columns(2)
                    ->schema([
                        TextInput::make('name')
                            ->required(),
                        TextInput::make('slug')
                            ->hidden(fn (?FormField $record) => $record == null)
                            ->disabled(),
                    ]),

                Select::make('type')
                    ->options(FormFieldType::class)
                    ->required()
                    ->live(),

                Grid::make()
                    ->columnSpanFull()
                    ->columns(2)
                    ->schema([
                        TextInput::make('default_validation_rules')
                            ->label('Implicit Validation Rules')
                            ->belowContent('These validation rules are determined by the field type and cannot be changed here.')
                            ->afterStateHydrated(function (TextInput $component, ?FormField $record) {
                                $component->state(
                                    is_array($record?->type?->getClassInstance()?->getDefaultValidationRules())
                                        ? implode(', ', $record?->type?->getClassInstance()?->getDefaultValidationRules())
                                        : ''
                                );
                            })
                            ->dehydrated(false)
                            ->disabled(),

                        Builder::make('validation_rules')
                            ->label('Additional Validation Rules')
                            ->blockNumbers(false)
                            ->hidden(fn (Get $get) =>
                                count(
                                    (
                                        $get('type') instanceOf FormFieldType ?
                                        $get('type') :
                                        FormFieldType::tryFrom($get('type'))
                                    )
                                        ?->getClassInstance()
                                        ?->getValidationRuleFilamentBuilderBlocks() ?? [],
                                ) === 0
                            )
                            ->collapsible()
                            ->blocks(fn (Get $get) =>
                                array_filter(
                                    array_map(
                                        fn (string $blockClass) => $blockClass::getFilamentBuilderBlock()?->maxItems(1) ?? null,
                                        (
                                            $get('type') instanceOf FormFieldType ?
                                            $get('type') :
                                            FormFieldType::tryFrom($get('type'))
                                        )
                                            ?->getClassInstance()
                                            ?->getValidationRuleFilamentBuilderBlocks() ?? [],
                                    ),
                                    fn ($block) => $block !== null,
                                )
                            )
                    ]),
            ]);
    }
}
