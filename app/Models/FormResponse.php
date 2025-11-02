<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;

class FormResponse extends Model
{
    /** @use HasFactory<\Database\Factories\FormFieldFactory> */
    use HasFactory,
        SoftDeletes,
        HasTimestamps;

    protected $fillable = [
        'ip_address',
        'user_agent',
        'form_id',
    ];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }

    public function responseFields()
    {
        return $this->hasMany(FormResponseField::class);
    }
}
