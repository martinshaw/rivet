<?php

namespace App\Http\Requests;

use App\Models\Form;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreFormResponseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $form = $this->route('form');

        return $form->requires_authentication_guard ?
            Auth::guard($form->requires_authentication_guard)->check() :
            true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $form = $this->route('form');

        $rules = collect($form->fields)->mapWithKeys(function ($field) {
            $fieldTypeClass = $field->type->getClassInstance();

            $implicitRules = $fieldTypeClass->getDefaultValidationRules();

            // TODO: In future, use an enum like with FormFieldType so that I can get rules regardless of blocks suitable for field type
            $configuredRuleBuilderClasses = collect($fieldTypeClass->getValidationRuleFilamentBuilderBlocks())
                // TODO: Totally inefficient, should be able to use the tryFrom method on an enum containing all of the validation rules
                ->mapWithKeys(fn ($blockClass) => [$blockClass::getValidationRuleName() => $blockClass]);

            $configuredRules = collect($field->validation_rules)
                ->map(
                    fn ($ruleBlockState) => $configuredRuleBuilderClasses
                        ->get($ruleBlockState['type'])::convertFilamentBuilderBlockStateToLaravelValidationRuleArray($ruleBlockState)
                )
                ->flatten();

            return [$field->slug => [...$implicitRules, ...$configuredRules]];
        })->toArray();

        return $rules;
    }
}
