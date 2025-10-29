<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Models\Page;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class PageInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('title'),
                TextEntry::make('slug'),
                TextEntry::make('content')
                    ->columnSpanFull(),
                TextEntry::make('path')
                    ->placeholder('-'),
                TextEntry::make('published_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('published_by_user_id')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (Page $record): bool => $record->trashed()),
            ]);
    }
}
