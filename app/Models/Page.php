<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Overtrue\LaravelVersionable\Versionable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Overtrue\LaravelVersionable\VersionStrategy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;

class Page extends Model
{
    /** @use HasFactory<\Database\Factories\PageFactory> */
    use HasFactory, 
        Versionable, 
        HasTimestamps, 
        SoftDeletes;
 
    protected $versionable = [
        'title',
        'slug',
        'content',
        'path',
        'published_at',
        'published_by_user_id',
    ];
 
    protected $versionStrategy = VersionStrategy::SNAPSHOT;
}
