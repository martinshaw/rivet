<?php
namespace App\Classes\FormFieldTypes;

/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:05:03.280Z
 * Modified:     2025-11-03T07:35:47.386Z
 * File Name:   BaseFormFieldType.php
 *
 * Description: description
 */

/**
 * Basis for classes which are enumerated by FormFieldType enum.
 */
abstract class BaseFormFieldType
{
    /**
     * @return string Human readable caption for this form field type.
     */
    abstract public static function getHumanName(): string;

    /**
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string> Laravel request validation rules which supersede user configured rules.
     */
    abstract public static function getDefaultValidationRules(): array;

    /**
     * @return string Path to the React component for this form field type. From the `resources/js/Components/Rivet/FormFields/` directory.
     */
    public static function getReactComponentPath(): ?string
    {
        return null;
    }

    /**
     * @return array<int, class-string<\App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\BaseFormFieldValidationRuleFilamentBuilderBlock>> Validation rule Filament builder blocks associated with this form field type.
     */
    public static function getValidationRuleFilamentBuilderBlocks(): array
    {
        return [
            // These are common to all form field types
            \App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Utilities\RequiredFormFieldValidationRuleFilamentBuilderBlock::class,
            \App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Utilities\NullableFormFieldValidationRuleFilamentBuilderBlock::class,
        ];
    }
}
