<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMailForm;

class MailController extends Controller
{
    public function sendClinicForm(Request $request)
    {
        Mail::to('psico@clinic.com')->send(new SendMailForm($request));
        return Inertia::render('/')
            ->with('success', 'Formulário enviado com sucesso!');
    }
}
