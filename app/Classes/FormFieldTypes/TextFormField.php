<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-01T23:18:33.886Z
 * File Name:   TextFormField.php
 *
 * Description: description
 */

class TextFormField extends BaseFormField
{
    public static function getHumanName(): string
    {
        return 'Text';
    }

    public static function getDefaultValidationRules(): array
    {
        return ['string'];
    }
}
