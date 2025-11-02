<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-02T00:43:23.372Z
 * File Name:   CheckboxFormField.php
 *
 * Description: description
 */

class CheckboxFormField extends BaseFormField
{
    public static function getHumanName(): string
    {
        return 'Checkbox';
    }

    public static function getDefaultValidationRules(): array
    {
        return ['boolean'];
    }
}
