<?php
namespace App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Booleans;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-02T12:23:52.717Z
 * Modified:     2025-11-02T13:01:16.031Z
 * File Name:   BooleanFormFieldValidationRuleFilamentBuilderBlock.php
 *
 * Description: description
 */

use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Builder\Block;
use App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\BaseFormFieldValidationRuleFilamentBuilderBlock;
use Filament\Infolists\Components\TextEntry;

class BooleanFormFieldValidationRuleFilamentBuilderBlock extends BaseFormFieldValidationRuleFilamentBuilderBlock
{
    public static function getValidationRuleName(): string
    {
        return 'boolean';
    }

    /**
     * @return Block
     */
    public static function getFilamentBuilderBlock(): Block
    {
        return Block::make('boolean')
            ->label('Boolean')
            ->icon('heroicon-o-x-circle')
            ->schema([
                TextEntry::make('heading')
                    ->state(null)
                    ->dehydrated(false)
                    ->label('boolean')
                    ->belowLabel(new HtmlString(<<<HTML
                        The field under validation must be able to be cast as a boolean. Accepted input are true, false, 1, 0, "1", and "0".<br/>
                        You may use the strict parameter (<code>boolean:strict</code>) to only consider the field valid if its value is <code>true</code> or <code>false</code>:</br/>
                        <a class="underline" target="_blank" href="https://laravel.com/docs/12.x/validation#rule-boolean">Learn more</a>
                    HTML
                    ))
            ]);
    }

    public static function convertFilamentBuilderBlockStateToLaravelValidationRuleArray(array $state): array
    {
        return ['boolean'];
    }
}
