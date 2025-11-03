<?php

namespace App\Filament\Resources\Forms\Resources\FormFields\Pages;

use App\Filament\Resources\Forms\Resources\FormFields\FormFieldResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditFormField extends EditRecord
{
    protected static string $resource = FormFieldResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getParentResource()::getUrl('fields', [
            'record' => $this->record->form->slug,
        ]);
    }
}
