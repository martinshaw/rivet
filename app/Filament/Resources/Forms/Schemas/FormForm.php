<?php

namespace App\Filament\Resources\Forms\Schemas;

use App\Models\Form;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;

class FormForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('slug')
                    ->hidden(fn (?Form $record) => $record == null)
                    ->readonly(),

                Toggle::make('enabled')
                    ->label('Enabled')
                    ->inline(false)
                    ->afterStateHydrated(function (Toggle $component, ?bool $state, Get $get) {
                        $component->state($get('enabled_at') !== null);
                    })
                    ->afterStateUpdated(function (Set $set, $state) {
                        $set('enabled_at', $state ? now() : null);
                    }),
                Hidden::make('enabled_at'),

                Select::make('requires_authentication_guard')
                    ->label('Requires Authentication')
                    ->default(null)
                    ->selectablePlaceholder(false)
                    ->options([
                        null => 'No - Anyone can submit this form',
                        'web' => 'Yes - User must be logged in',
                    ]),
            ]);
    }
}
