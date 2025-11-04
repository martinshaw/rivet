<?php

namespace App\Filament\Resources\Forms\RelationManagers;

use App\Models\FormResponse;
use donatj\UserAgent\UserAgentParser;
use Filament\Actions\AssociateAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\DissociateAction;
use Filament\Actions\DissociateBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Infolists\Components\TextEntry;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ResponsesRelationManager extends RelationManager
{
    protected static string $relationship = 'responses';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('ip_address'),
                Textarea::make('user_agent')
                    ->columnSpanFull(),
            ]);
    }

    public function infolist(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('ip_address')
                    ->label('Location / IP')
                    ->formatStateUsing(fn (string $state): string => $this->getLocationFromIpAddress($state))
                    ->placeholder('-'),

                TextEntry::make('user_agent')
                    ->label('Browser Info.')
                    ->formatStateUsing(fn (string $state): string => $this->getBrowserInformationFromUserAgent($state))
                    ->placeholder('-'),

                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (FormResponse $record): bool => $record->trashed()),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                TextColumn::make('ip_address')
                    ->label('Location / IP')
                    ->formatStateUsing(fn (string $state): string => $this->getLocationFromIpAddress($state))
                    ->searchable(),

                TextColumn::make('user_agent')
                    ->label('Browser Info.')
                    ->formatStateUsing(fn (string $state): string => $this->getBrowserInformationFromUserAgent($state))
                    ->searchable(),

                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                TrashedFilter::make(),
            ])
            ->headerActions([
                CreateAction::make(),
                // AssociateAction::make(),
            ])
            ->recordActions([
                ViewAction::make(),
                // EditAction::make(),
                // DissociateAction::make(),
                DeleteAction::make(),
                ForceDeleteAction::make(),
                RestoreAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    // DissociateBulkAction::make(),
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ])
            ->modifyQueryUsing(fn (Builder $query) => $query
                ->withoutGlobalScopes([
                    SoftDeletingScope::class,
                ]));
    }

    private function getLocationFromIpAddress(?string $ipAddress): string
    {
        if (is_null($ipAddress)) {
            return '-';
        }

        // Generate cache key for this IP address
        $cacheKey = "geolocation:{$ipAddress}";

        // Try to get cached result first
        $cachedResult = Cache::get($cacheKey);
        if ($cachedResult !== null) {
            return $cachedResult;
        }

        try {
            $data = Http::get("http://ip-api.com/json/{$ipAddress}")->throw()->json();
        } catch (\Exception $e) {
            Log::error("Failed to fetch geolocation for IP {$ipAddress}: " . $e->getMessage());
            $result = "Unknown - {$ipAddress}";

            // Cache failed results for 1 hour to avoid repeated failed requests
            Cache::put($cacheKey, $result, now()->addHour());
            return $result;
        }

        if ($data['status'] === 'success') {
            $result = "{$data['city']}, {$data['regionName']}, {$data['country']} - {$ipAddress}";

            Cache::put($cacheKey, $result, now()->addMonth());
            return $result;
        }

        Log::warning("Geolocation API returned failure for IP {$ipAddress}", [$data]);
        $result = 'Unknown - ' . $ipAddress;

        // Cache API failures for 1 hour to avoid repeated requests
        Cache::put($cacheKey, $result, now()->addHour());
        return $result;
    }

    private function getBrowserInformationFromUserAgent(?string $userAgent): string
    {
        if (is_null($userAgent)) {
            return '-';
        }

        try {
            $browserInfo = app(UserAgentParser::class)->parse($userAgent);
        } catch (\Exception $e) {
            Log::error("Failed to parse user agent: " . $e->getMessage());
            return 'Unknown Browser';
        }

        return $browserInfo->browser() . ' ' . $browserInfo->browserVersion() . ' on ' . $browserInfo->platform();
    }
}
