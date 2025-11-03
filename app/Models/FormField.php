<?php

namespace App\Models;

use App\Enums\FormFieldType;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\SortableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;

class FormField extends Model
{
    /** @use HasFactory<\Database\Factories\FormFieldFactory> */
    use HasSlug,
        HasFactory,
        SoftDeletes,
        HasTimestamps,
        SortableTrait;

    protected $fillable = [
        'name',
        'slug',
        'type',
        'validation_rules',
        'sort_order',
        'form_id',
    ];

    protected $casts = [
        'type' => FormFieldType::class,
        'validation_rules' => 'array',
        'sort_order' => 'integer',
    ];

    protected $appends = [
        'validation_rules_display',
    ];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug')
            ->startSlugSuffixFrom(2)
            // I want to update the slug for the last time when enabling the form for the first time. But I need it for explicit model binding in Filament navigation
            ->skipGenerateWhen(fn () => $this?->form?->enabled_for_first_time_at != null && $this->slug != null);

            // // There may be referencing of this form by its slug in the page code and Page model contents, so we don't want it to change.
            // ->doNotGenerateSlugsOnUpdate()
            // // ... and only generate for the first time if the form is enabled.
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

    /** @see https://github.com/spatie/eloquent-sortable?tab=readme-ov-file#grouping */
    public function buildSortQuery()
    {
        return static::query()->where('user_id', $this->user_id);
    }

    public function getValidationRulesDisplayAttribute()
    {
        return array_unique([
            ...($this?->type?->getClassInstance()?->getDefaultValidationRules() ?? []),
            ...(array_filter(
                array_map(
                    fn ($ruleSerialized) => $ruleSerialized['type'] ?? null,
                    $this->validation_rules ?? [],
                ),
                fn ($rule) => $rule !== null,
            ))
        ]);
    }

    public function form()
    {
        return $this->belongsTo(Form::class);
    }
}
