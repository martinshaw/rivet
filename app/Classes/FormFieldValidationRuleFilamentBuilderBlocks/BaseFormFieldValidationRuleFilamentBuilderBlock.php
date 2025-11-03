<?php
namespace App\Classes\FormFieldValidationRuleFilamentBuilderBlocks;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-02T12:23:52.717Z
 * Modified:     2025-11-02T12:55:35.399Z
 * File Name:   BaseFormFieldValidationRuleFilamentBuilderBlock.php
 *
 * Description: description
 */
use Filament\Forms\Components\Builder\Block;

abstract class BaseFormFieldValidationRuleFilamentBuilderBlock
{
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
