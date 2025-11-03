<?php

namespace App\Filament\Resources\Forms\Pages;

use App\Filament\Resources\Forms\FormResource;
use App\Filament\Resources\Forms\Resources\FormFields\FormFieldResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRelatedRecords;
use Filament\Tables\Table;

class ManageFormFormFields extends ManageRelatedRecords
{
    protected static string $resource = FormResource::class;

    protected static string $relationship = 'fields';

    protected static ?string $relatedResource = FormFieldResource::class;

    public function table(Table $table): Table
    {
        return $table
            ->headerActions([
                CreateAction::make(),
            ]);
    }
}
