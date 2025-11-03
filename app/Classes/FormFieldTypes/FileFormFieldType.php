<?php
namespace App\Classes\FormFieldTypes;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:57.177Z
 * Modified:     2025-11-02T12:25:25.891Z
 * File Name:   FileFormFieldType.php
 *
 * Description: description
 */

class FileFormFieldType extends BaseFormFieldType
{
    public static function getHumanName(): string
    {
        return 'File';
    }

    public static function getDefaultValidationRules(): array
    {
        return ['file'];
    }
}
