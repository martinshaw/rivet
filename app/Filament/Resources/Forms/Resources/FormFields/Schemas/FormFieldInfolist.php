<?php

namespace App\Filament\Resources\Forms\Resources\FormFields\Schemas;

use App\Models\FormField;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;

class FormFieldInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make()
                    ->columns(2)
                    ->schema([
                        TextEntry::make('name'),
                        TextEntry::make('slug'),
                    ]),

                TextEntry::make('type')
                    ->badge(),

                Grid::make()
                    ->columnSpanFull()
                    ->columns(2)
                    ->schema([
                        TextEntry::make('default_validation_rules')
                            ->label('Implicit Validation Rules')
                            ->state(fn (?FormField $record) => is_array($record?->type?->getClassInstance()?->getDefaultValidationRules())
                                ? implode(', ', $record?->type?->getClassInstance()?->getDefaultValidationRules())
                                : ''
                            ),

                        TextEntry::make('validation_rules')
                            ->label('Additional Validation Rules')
                            ->state(fn (?FormField $record) => implode(', ', (array_map(fn ($ruleSerialized) => $ruleSerialized['type'], $record?->validation_rules)))),
                    ]),


                // TextInput::make('name')
                //     ->required(),
                // TextInput::make('slug')
                //     ->hidden(fn (?FormField $record) => $record == null)
                //     ->readonly(),

                // Select::make('type')
                //     ->options(FormFieldType::class)
                //     ->required(),

                // Grid::make()
                //     ->columnSpanFull()
                //     ->columns(2)
                //     ->schema([
                //         TextInput::make('default_validation_rules')
                //             ->label('Implicit Validation Rules')
                //             ->belowContent('These validation rules are determined by the field type and cannot be changed here.')
                //             ->afterStateHydrated(function (TextInput $component, ?FormField $record) {
                //                 $component->state(
                //                     is_array($record?->type?->getClassInstance()?->getDefaultValidationRules())
                //                         ? implode(', ', $record?->type?->getClassInstance()?->getDefaultValidationRules())
                //                         : ''
                //                 );
                //             })
                //             ->dehydrated(false)
                //             ->disabled(),

                //         KeyValue::make('validation_rules')
                //             ->label('Additional Validation Rules')
                //             ->hidden(fn (?FormField $record) => $record == null),
                //     ]),
            ]);
    }
}
