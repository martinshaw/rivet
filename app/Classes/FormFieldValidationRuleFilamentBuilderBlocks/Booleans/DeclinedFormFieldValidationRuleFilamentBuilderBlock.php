<?php
namespace App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Booleans;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-02T12:23:52.717Z
 * Modified:     2025-11-03T07:32:53.490Z
 * File Name:   DeclinedFormFieldValidationRuleFilamentBuilderBlock.php
 *
 * Description: description
 */

use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Builder\Block;
use App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\BaseFormFieldValidationRuleFilamentBuilderBlock;
use Filament\Infolists\Components\TextEntry;

class DeclinedFormFieldValidationRuleFilamentBuilderBlock extends BaseFormFieldValidationRuleFilamentBuilderBlock
{
    /**
     * @return Block
     */
    public static function getFilamentBuilderBlock(): Block
    {
        return Block::make('declined')
            ->label('Declined')
            ->icon('heroicon-o-x-circle')
            ->schema([
                TextEntry::make('heading')
                    ->state(null)
                    ->dehydrated(false)
                    ->label('declined')
                    ->belowLabel(new HtmlString(<<<HTML
                        The field under validation must be "no", "off", 0, "0", false, or "false".</br/>
                        <a class="underline" target="_blank" href="https://laravel.com/docs/12.x/validation#rule-declined">Learn more</a>
                    HTML
                    ))
            ]);
    }

    public static function convertFilamentBuilderBlockStateToLaravelValidationRuleArray(array $state): array
    {
        return ['declined'];
    }
}
