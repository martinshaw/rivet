<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-01T23:07:11.271Z
 * File Name:   NumberFormFieldType.php
 *
 * Description: description
 */

class NumberFormFieldType extends BaseFormFieldType
{
    public static function getHumanName(): string
    {
        return 'Number';
    }

    public static function getDefaultValidationRules(): array
    {
        return ['numeric'];
    }
}
