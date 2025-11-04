<?php
namespace App\Services\Rivet;

use App\Models\Form;
use App\Models\FormResponse;
use App\Http\Requests\StoreFormResponseRequest;

/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-04T09:51:27.352Z
 * Modified:     2025-11-04T10:14:43.810Z
 * File Name:   RivetFormService.php
 *
 * Description: description
 */

class RivetFormResponseService
{
    public function createNewFormResponseFromRequest(StoreFormResponseRequest $request, Form $form): void
    {
        $formResponse = $form->responses()->create([
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        $formFields = $form->fields;

        $responseFields = collect($request->all())
            ->map(function ($value, $key) use ($form, $formFields, $formResponse) {
                $formFieldForResponseField = $formFields->firstWhere('slug', $key);
                if (!$formFieldForResponseField) {
                    // TODO: Should we throw exception or just skip?
                    throw new \Exception("Form field with slug {$key} not found when creating form response fields.");
                }

                return [
                    'value' => json_encode($value),
                    'form_id' => $form->id,
                    'form_response_id' => $formResponse->id,
                    'form_field_id' => $formFieldForResponseField->id,
                ];
            })
            ->values()
            ->toArray();

        $formResponse->responseFields()->createMany($responseFields);
    }
}
