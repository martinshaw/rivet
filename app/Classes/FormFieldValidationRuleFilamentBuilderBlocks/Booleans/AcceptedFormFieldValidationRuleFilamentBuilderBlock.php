<?php
namespace App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\Booleans;
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-02T12:23:52.717Z
 * Modified:     2025-11-02T13:02:17.704Z
 * File Name:   AcceptedFormFieldValidationRuleFilamentBuilderBlock.php
 *
 * Description: description
 */

use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Builder\Block;
use App\Classes\FormFieldValidationRuleFilamentBuilderBlocks\BaseFormFieldValidationRuleFilamentBuilderBlock;
use Filament\Forms\Components\Placeholder;
use Filament\Infolists\Components\TextEntry;

class AcceptedFormFieldValidationRuleFilamentBuilderBlock extends BaseFormFieldValidationRuleFilamentBuilderBlock
{
    public static function getValidationRuleName(): string
    {
        return 'accepted_if';
    }

    /**
     * @return Block
     */
    public static function getFilamentBuilderBlock(): Block
    {
        return Block::make('accepted')
            ->label('Accepted')
            ->icon('heroicon-o-check-circle')
            ->schema([
                TextEntry::make('heading')
                    ->state(null)
                    ->dehydrated(false)
                    ->label('accepted')
                    ->belowLabel(new HtmlString(<<<HTML
                        The field under validation must be "yes", "on", 1, "1", true, or "true". This is useful for validating "Terms of Service" acceptance or similar fields.</br/>
                        <a class="underline" target="_blank" href="https://laravel.com/docs/12.x/validation#rule-accepted">Learn more</a>
                    HTML
                    ))
            ]);
    }

    public static function convertFilamentBuilderBlockStateToLaravelValidationRuleArray(array $state): array
    {
        return ['accepted'];
    }
}
