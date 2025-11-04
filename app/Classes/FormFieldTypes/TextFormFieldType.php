<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-03T07:38:10.233Z
 * File Name:   TextFormFieldType.php
 *
 * Description: description
 */

class TextFormFieldType extends BaseFormFieldType
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
