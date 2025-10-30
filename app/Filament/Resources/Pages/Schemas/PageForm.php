<?php

namespace App\Filament\Resources\Pages\Schemas;

use Closure;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
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
                    ->reactive()
                    ->required(),
                TextInput::make('slug')
                    ->placeholder(fn (Get $get) => empty($get('title')) ? 'Will be generated on save' : Str::slug($get('title')))
                    ->required()
                    ->unique(ignoreRecord: true),


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
