<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class FormsDashboardWidget extends StatsOverviewWidget
{
    protected ?string $heading = 'Forms';

    protected function getPollingInterval(): ?string
    {
        return '20s';
    }

    protected function getStats(): array
    {
        return [
            Stat::make('Number of Forms', fn (): int => \App\Models\Form::count()),
            Stat::make('Number of Form Responses', fn (): int => \App\Models\FormResponse::count()),
        ];
    }
}
