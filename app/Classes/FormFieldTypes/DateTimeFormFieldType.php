<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-01T23:29:40.558Z
 * File Name:   DateTimeFormFieldType.php
 *
 * Description: description
 */

class DateTimeFormFieldType extends BaseFormFieldType
{
    public static function getHumanName(): string
    {
        return 'Date and Time';
    }

    public static function getDefaultValidationRules(): array
    {
        return ['datetime'];
    }
}
