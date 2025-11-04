<?php
namespace App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Utilities;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-02T12:23:52.717Z
 * Modified:     2025-11-04T09:35:49.908Z
 * File Name:   RequiredFormFieldValidationRuleFilamentBuilderBlock.php
 *
 * Description: description
 */

use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Builder\Block;
use Filament\Infolists\Components\TextEntry;
use App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\BaseFormFieldValidationRuleFilamentBuilderBlock;

class RequiredFormFieldValidationRuleFilamentBuilderBlock extends BaseFormFieldValidationRuleFilamentBuilderBlock
{
    public static function getValidationRuleName(): string
    {
        return 'required';
    }

    /**
     * @return Block
     */
    public static function getFilamentBuilderBlock(): Block
    {
        return Block::make('required')
            ->label('Required')
            ->icon('heroicon-o-exclamation-circle')
            ->schema([
                TextEntry::make('heading')
                    ->state(null)
                    ->dehydrated(false)
                    ->label('required')
                    ->belowLabel(new HtmlString(<<<HTML
                        The field under validation must be present in the input data and not empty. A field is "empty" if it meets one of the following criteria:<br/>
                        <ul class="list-disc list-inside">
                            <li>The value is null.</li>
                            <li>The value is an empty string.</li>
                            <li>The value is an empty array or empty Countable object.</li>
                            <li>The value is an uploaded file with no path.</li>
                        </ul><br/>
                        <a class="underline" target="_blank" href="https://laravel.com/docs/12.x/validation#rule-required">Learn more</a>
                    HTML
                    ))
            ]);
    }

    public static function convertFilamentBuilderBlockStateToLaravelValidationRuleArray(array $state): array
    {
        return ['required'];
    }
}
