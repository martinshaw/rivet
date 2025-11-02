<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-01T23:15:55.463Z
 * File Name:   EmailFormField.php
 *
 * Description: description
 */

class EmailFormField extends BaseFormField
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
