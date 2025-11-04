<?php
namespace App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Utilities;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-02T12:23:52.717Z
 * Modified:     2025-11-03T07:42:59.169Z
 * File Name:   NullableFormFieldValidationRuleFilamentBuilderBlock.php
 *
 * Description: description
 */

use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Builder\Block;
use Filament\Infolists\Components\TextEntry;
use App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\BaseFormFieldValidationRuleFilamentBuilderBlock;

class NullableFormFieldValidationRuleFilamentBuilderBlock extends BaseFormFieldValidationRuleFilamentBuilderBlock
{
    public static function getValidationRuleName(): string
    {
        return 'nullable';
    }

    /**
     * @return Block
     */
    public static function getFilamentBuilderBlock(): Block
    {
        return Block::make('nullable')
            ->label('Nullable')
            ->icon('heroicon-o-question-mark-circle')
            ->schema([
                TextEntry::make('heading')
                    ->state(null)
                    ->dehydrated(false)
                    ->label('nullable')
                    ->belowLabel(new HtmlString(<<<HTML
                        The field under validation may be null.<br/>
                        <a class="underline" target="_blank" href="https://laravel.com/docs/12.x/validation#rule-nullable">Learn more</a>
                    HTML
                    ))
            ]);
    }

    public static function convertFilamentBuilderBlockStateToLaravelValidationRuleArray(array $state): array
    {
        return ['nullable'];
    }
}
