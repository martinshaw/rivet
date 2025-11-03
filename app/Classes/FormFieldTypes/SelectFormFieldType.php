<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-01T23:12:56.137Z
 * File Name:   SelectFormFieldType.php
 *
 * Description: description
 */

class SelectFormFieldType extends BaseFormFieldType
{
    public static function getHumanName(): string
    {
        return 'Select';
    }

    public static function getDefaultValidationRules(): array
    {
        return ['array'];
    }
}
