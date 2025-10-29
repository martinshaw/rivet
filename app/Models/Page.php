<?php

namespace App\Models;

use App\Observers\PageObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use Overtrue\LaravelVersionable\Versionable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Overtrue\LaravelVersionable\VersionStrategy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

#[ObservedBy(PageObserver::class)]
class Page extends Model
{
    /** @use HasFactory<\Database\Factories\PageFactory> */
    use HasFactory,
        Versionable,
        HasTimestamps,
        SoftDeletes,
        HasSlug;

    protected $versionable = [
        'title',
        'slug',
        'content',
        'path',
        'published_at',
        'published_by_user_id',
    ];

    protected $versionStrategy = VersionStrategy::SNAPSHOT;

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug')
            ->startSlugSuffixFrom(2);
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
}
