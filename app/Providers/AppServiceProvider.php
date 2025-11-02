<?php

namespace App\Providers;

use App\Models\Form;
use App\Models\FormResponse;
use App\Models\Page;
use App\Models\User;
use App\Policies\FormPolicy;
use App\Policies\FormResponsePolicy;
use App\Policies\PagePolicy;
use App\Policies\UserPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Gate::policy(User::class, UserPolicy::class);
        Gate::policy(Page::class, PagePolicy::class);
        Gate::policy(Form::class, FormPolicy::class);
        Gate::policy(FormResponse::class, FormResponsePolicy::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
