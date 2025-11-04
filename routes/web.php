<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Rivet\RivetFormResponseController;

// Routes related to Rivet internal functionality
// TODO: In the future, this will be removed and we will use the auto-generated stubs in `routes/rivet.php` instead

Route::group([
    'prefix' => '_rivet',
    'as' => 'rivet.',
], function () {
    Route::post('/forms/{form:slug}', [RivetFormResponseController::class, 'store'])->name('forms.store');
});

// Routes related to Alex's hardcoded site pages

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/services', fn () => Inertia::render('Services'))->name('services');
Route::get('/partners', fn () => Inertia::render('Partners'))->name('partners');
Route::get('/events', fn () => Inertia::render('Events'))->name('events');
Route::get('/case-studies', fn () => Inertia::render('CaseStudies'))->name('case-studies');
Route::get('/insights', fn () => Inertia::render('Insights'))->name('insights');
Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');
Route::get('/submit', fn () => Inertia::render('Submit'))->name('submit');
Route::get('/privacy', fn () => Inertia::render('Privacy'))->name('privacy');
Route::get('/terms', fn () => Inertia::render('Terms'))->name('terms');
Route::get('/confidentiality', fn () => Inertia::render('Confidentiality'))->name('confidentiality');

// include_once './rivet.php';
