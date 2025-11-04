<?php
namespace App\Classes\FormFieldValidationRuleFilamentBuilderBlocks;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-02T12:23:52.717Z
 * Modified:     2025-11-04T09:37:05.462Z
 * File Name:   BaseFormFieldValidationRuleFilamentBuilderBlock.php
 *
 * Description: description
 */
use Filament\Forms\Components\Builder\Block;

abstract class BaseFormFieldValidationRuleFilamentBuilderBlock
{
    /**
     * TODO: When we use an enum for validation rules, we can remove this method.
     * @return string Should match name of the Filament builder block and Laravel validation rule.
     */
    abstract public static function getValidationRuleName(): string;

    /**
     * @return Block
     */
    abstract public static function getFilamentBuilderBlock(): Block;

    /**
     * @param array $state
     * @return array
     */
    abstract public static function convertFilamentBuilderBlockStateToLaravelValidationRuleArray(array $state): array;
}
