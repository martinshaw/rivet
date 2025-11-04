<?php
namespace App\Classes\FormFieldTypes;

use App\Models\FormResponseField;
use Filament\Infolists\Components\KeyValueEntry;
use Filament\Infolists\Components\TextEntry;

/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:05:03.280Z
 * Modified:     2025-11-04T11:08:23.912Z
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

    /**
     * @param FormResponseField $formResponseField
     * @return array<int, Component|Action|ActionGroup|string|Htmlable> Filament Infolist entry components to show the response value for this form field type.
     */
    public static function getResponseValueFilamentInfolistEntries(FormResponseField $formResponseField): array
    {
        $decodedValue = json_decode($formResponseField->value, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            return [
                TextEntry::make('value')
                    ->inlineLabel()
                    ->label('Response Value')
                    ->hint('Could not decode value from JSON.'),
            ];
        }

        if (is_object($decodedValue)) {
            return [
                KeyValueEntry::make('value')
                    ->inlineLabel()
                    ->label('Response Value')
            ];
        }

        if (is_array($decodedValue)) {
            return [
                KeyValueEntry::make('value')
                    ->inlineLabel()
                    ->label('Response Value')
            ];
        }

        if (is_string($decodedValue) || is_numeric($decodedValue) || is_bool($decodedValue) || is_null($decodedValue)) {
            return [
                TextEntry::make('value')
                    ->inlineLabel()
                    ->label('Response Value')
                    ->formatStateUsing(function ($state) {
                        return (string)json_decode($state);
                    }),
            ];
        }

        return [
            TextEntry::make('value')
                ->inlineLabel()
                ->label('Response Value')
                ->hint('Unknown value type.'),
        ];
    }
}
