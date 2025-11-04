<?php

namespace App\Filament\Resources\Forms\Resources\FormFields\Pages;

use App\Filament\Resources\Forms\Resources\FormFields\FormFieldResource;
use Filament\Resources\Pages\CreateRecord;

class CreateFormField extends CreateRecord
{
    protected static string $resource = FormFieldResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getParentResource()::getUrl('fields', [
            'record' => $this->record->form->slug,
        ]);
    }
}
