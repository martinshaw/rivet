<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;

class FormResponseField extends Model
{
    /** @use HasFactory<\Database\Factories\FormFieldFactory> */
    use HasFactory,
        SoftDeletes,
        HasTimestamps;

    protected $fillable = [
        'value',
        'form_id',
        'form_response_id',
        'form_field_id',
    ];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }

    public function formResponse()
    {
        return $this->belongsTo(FormResponse::class);
    }

    public function formField()
    {
        return $this->belongsTo(FormField::class);
    }
}
