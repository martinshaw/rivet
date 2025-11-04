<?php
namespace App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Booleans;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-02T12:23:52.717Z
 * Modified:     2025-11-03T07:32:20.583Z
 * File Name:   DeclinedIfFormFieldValidationRuleFilamentBuilderBlock.php
 *
 * Description: description
 */

use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Builder\Block;
use Filament\Infolists\Components\TextEntry;
use App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\BaseFormFieldValidationRuleFilamentBuilderBlock;

class DeclinedIfFormFieldValidationRuleFilamentBuilderBlock extends BaseFormFieldValidationRuleFilamentBuilderBlock
{
    public static function getValidationRuleName(): string
    {
        return 'declined_if';
    }

    /**
     * @return Block
     */
    public static function getFilamentBuilderBlock(): Block
    {
        return Block::make('declined_if')
            ->label('Declined If')
            ->icon('heroicon-o-x-circle')
            ->schema([
                TextEntry::make('heading')
                    ->state(null)
                    ->dehydrated(false)
                    ->label('declined_if:anotherfield,value,...')
                    ->belowLabel(new HtmlString(<<<HTML
                        The field under validation must be "no", "off", 0, "0", false, or "false" if another field under validation is equal to a specified value.</br/>
                        <a class="underline" target="_blank" href="https://laravel.com/docs/12.x/validation#rule-declined-if">Learn more</a>
                    HTML
                )),
                TextInput::make('anotherfield')
                    ->label('anotherfield')
                    ->helperText('The name of the other field to check against.'),
                TextInput::make('value')
                    ->label('value')
                    ->helperText('The value that the other field must equal for this field to be declined'),
            ]);
    }

    public static function convertFilamentBuilderBlockStateToLaravelValidationRuleArray(array $state): array
    {
        // TODO: Test that this actually works
        // TODO: Should throw and handle an exception if values are no sufficient to build the rule
        if (!isset($state['anotherfield']) || !isset($state['value'])) {
            throw new \InvalidArgumentException('Both "anotherfield" and "value" are required for the declined_if rule.');
        }
        return ['declined_if:' . $state['anotherfield'] . ',' . $state['value']];
    }
}
