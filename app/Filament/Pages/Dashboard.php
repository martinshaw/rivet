<?php

namespace App\Filament\Pages;

use Illuminate\Contracts\Support\Htmlable;
use Filament\Pages\Dashboard as BaseDashboard;

class Dashboard extends BaseDashboard
{
    public function getTitle(): string|Htmlable
    {
        return 'Welcome ' . auth()->user()->name . ' !';
    }
}
