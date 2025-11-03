<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-02T12:00:03.488Z
 * File Name:   EmailFormFieldType.php
 *
 * Description: description
 */

class EmailFormFieldType extends BaseFormFieldType
{
    public static function getHumanName(): string
    {
        return 'Email';
    }

    public static function getDefaultValidationRules(): array
    {
        return ['email'];
    }
}
