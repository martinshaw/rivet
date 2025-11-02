<?php

namespace App\Observers;

use App\Models\Form;

class FormObserver
{
    /**
     * Handle the Form "created" event.
     */
    public function created(Form $form): void
    {
        //
    }

    /**
     * Handle the Form "updated" event.
     */
    public function updated(Form $form): void
    {
        //
    }

    /**
     * Handle the Form "saving" event.
     */
    public function saving(Form $form): void
    {
        // If the form is being enabled for the first time, set the enabled_for_first_time_at timestamp
        if ($form->isDirty('enabled_at') && $form->enabled_at !== null && $form->enabled_for_first_time_at === null) {
            $form->enabled_for_first_time_at = now();
        }
    }

    /**
     * Handle the Form "deleted" event.
     */
    public function deleted(Form $form): void
    {
        //
    }

    /**
     * Handle the Form "restored" event.
     */
    public function restored(Form $form): void
    {
        //
    }

    /**
     * Handle the Form "force deleted" event.
     */
    public function forceDeleted(Form $form): void
    {
        //
    }
}
