<?php
namespace App\Enums;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-01T23:04:19.773Z
 * Modified:     2025-11-02T12:26:22.872Z
 * File Name:   FormFieldType.php
 *
 * Description: description
 */

use Filament\Support\Contracts\HasLabel;
use Illuminate\Contracts\Support\Htmlable;
use App\Classes\FormFieldTypes\BaseFormFieldType;

enum FormFieldType: string implements HasLabel
{
    case Text = 'text';
    case Number = 'number';
    case Email = 'email';
    case Select = 'select';
    case Checkbox = 'checkbox';
    case Radio = 'radio';
    case DateTime = 'datetime';
    case File = 'file';

    public function getClass(): ?string
    {
        return match ($this) {
            self::Text => \App\Classes\FormFieldTypes\TextFormFieldType::class,
            self::Number => \App\Classes\FormFieldTypes\NumberFormFieldType::class,
            self::Email => \App\Classes\FormFieldTypes\EmailFormFieldType::class,
            self::Select => \App\Classes\FormFieldTypes\SelectFormFieldType::class,
            self::Checkbox => \App\Classes\FormFieldTypes\CheckboxFormFieldType::class,
            self::Radio => \App\Classes\FormFieldTypes\RadioFormFieldType::class,
            self::DateTime => \App\Classes\FormFieldTypes\DateTimeFormFieldType::class,
            self::File => \App\Classes\FormFieldTypes\FileFormFieldType::class,

            default => null,
        };
    }

    public function getClassInstance(): ?BaseFormFieldType
    {
        $class = $this->getClass();
        return $class ? new $class() : null;
    }

    public function getLabel(): string | Htmlable | null
    {
        $classInstance = $this->getClassInstance();
        return $classInstance ? $classInstance::getHumanName() : null;
    }
}
