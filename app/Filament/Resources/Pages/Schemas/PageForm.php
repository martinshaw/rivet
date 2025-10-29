<?php

namespace App\Filament\Resources\Pages\Schemas;

use Closure;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class PageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                /**
                 * Title and Slug related
                 * @see https://v2.filamentphp.com/tricks/generate-slugs-without-overriding
                 */
                TextInput::make('title')
                    ->afterStateUpdated(function (Closure $get, Closure $set, ?string $state) {
                        if (! $get('is_slug_changed_manually') && filled($state)) {
                            $set('slug', Str::slug($state));
                        }
                    })
                    ->reactive()
                    ->required(),
                TextInput::make('slug')
                    ->afterStateUpdated(function (Closure $set) {
                        $set('is_slug_changed_manually', true);
                    })
                    ->required()
                    ->unique(ignoreRecord: true),
                Hidden::make('is_slug_changed_manually')
                    ->default(false)
                    ->dehydrated(false),


                Textarea::make('content')
                    ->required()
                    ->columnSpanFull(),


                TextInput::make('path'),


                DateTimePicker::make('published_at'),
                TextInput::make('published_by_user_id')
                    ->numeric(),
            ]);
    }
}
