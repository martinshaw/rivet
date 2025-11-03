<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-03T07:45:55.875Z
 * File Name:   RadioFormFieldType.php
 *
 * Description: description
 */

class RadioFormFieldType extends BaseFormFieldType
{
    public static function getHumanName(): string
    {
        return 'Radio';
    }

    public static function getDefaultValidationRules(): array
    {
        return ['boolean'];
    }

    public static function getValidationRuleFilamentBuilderBlocks(): array
    {
        return [
            ...parent::getValidationRuleFilamentBuilderBlocks(),

            \App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Booleans\AcceptedFormFieldValidationRuleFilamentBuilderBlock::class,
            \App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Booleans\AcceptedIfFormFieldValidationRuleFilamentBuilderBlock::class,
            \App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Booleans\DeclinedFormFieldValidationRuleFilamentBuilderBlock::class,
            \App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Booleans\DeclinedIfFormFieldValidationRuleFilamentBuilderBlock::class,
        ];
    }
}
