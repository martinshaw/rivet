<?php

namespace App\Http\Controllers\Rivet;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFormResponseRequest;
use App\Http\Requests\UpdateFormResponseRequest;
use App\Models\Form;
use App\Models\FormResponse;
use App\Services\Rivet\RivetFormResponseService;
use Illuminate\Http\RedirectResponse;

class RivetFormResponseController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(
        StoreFormResponseRequest $request,
        Form $form,
        RivetFormResponseService $rivetFormResponseService
    ): RedirectResponse
    {
        try {
            $rivetFormResponseService->createNewFormResponseFromRequest($request, $form);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to create form response: ' . $e->getMessage());
        }

        return redirect()->back()->with('success', 'Form response submitted successfully.');
    }
}
