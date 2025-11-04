<?php

namespace App\Filament\Resources\Forms\Schemas;

use App\Models\Form;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Grid;
use Filament\Infolists\Components\TextEntry;

class FormInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name'),
                TextEntry::make('slug'),

                TextEntry::make('enabled_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('enabled_for_first_time_at')
                    ->label('Enabled For First Time At')
                    ->dateTime()
                    ->placeholder('-'),

                TextEntry::make('requires_authentication_guard')
                    ->label('Requires Authentication')
                    ->formatStateUsing(fn (?bool $state): string => $state ? 'Yes - using \'' . $state . '\' guard' : 'No'),

                Grid::make()
                    ->columnSpanFull()
                    ->schema([
                        TextEntry::make('created_at')
                            ->dateTime()
                            ->placeholder('-'),
                        TextEntry::make('updated_at')
                            ->dateTime()
                            ->placeholder('-'),
                        TextEntry::make('deleted_at')
                            ->dateTime()
                            ->visible(fn (Form $record): bool => $record->trashed()),
                    ]),
            ]);
    }
}
