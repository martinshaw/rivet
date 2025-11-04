<?php

namespace App\Models;

use App\Observers\FormObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;

#[ObservedBy(FormObserver::class)]
class Form extends Model
{
    /** @use HasFactory<\Database\Factories\FormFactory> */
    use HasFactory, HasTimestamps, SoftDeletes, HasSlug;

    protected $fillable = [
        'name',
        'slug',
        'enabled_at',
        'enabled_for_first_time_at',
        'requires_authentication_guard',
    ];

    protected $casts = [
        'enabled_at' => 'datetime',
        'enabled_for_first_time_at' => 'datetime',
    ];

    protected $with = [
        'fields',
    ];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            // We should use underscores because they are easier to use as keys in Javascript objects
            ->usingSeparator('_')
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug')
            ->startSlugSuffixFrom(2)
            // I want to update the slug for the last time when enabling the form for the first time. But I need it for explicit model binding in Filament navigation
            ->skipGenerateWhen(fn () => $this->enabled_for_first_time_at != null && $this->slug != null);

            // There may be referencing of this form by its slug in the page code and Page model contents, so we don't want it to change.
            // ->doNotGenerateSlugsOnUpdate();
            // ... and only generate for the first time if the form is enabled.
            // ->skipGenerateWhen(fn () => $this->enabled_at == null);
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function fields()
    {
        return $this->hasMany(FormField::class);
    }

    public function responses()
    {
        return $this->hasMany(FormResponse::class);
    }
}
