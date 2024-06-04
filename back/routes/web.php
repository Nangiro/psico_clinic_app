<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PsychologistController;
use App\Http\Controllers\SecretaryController;
use App\Http\Controllers\ScheduleHistoryController;
use App\Http\Controllers\SessionHistoryController;
use App\Http\Controllers\UserSessionController;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('App');
})->middleware(['redirect'])->name('home');

Route::get('/home', function () {
    return Inertia::render('App');
})->name('index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/mail/form', [MailController::class, 'sendClinicForm'])->name('mail.form');

Route::prefix('patient')->group(function () {
    Route::get('/{id}', [PatientController::class, 'index'])->middleware(['auth', 'verified'])->name('patient.index');
});

Route::prefix('psychologist')->group(function () {
    Route::get('/{id}', [PsychologistController::class, 'index'])->middleware(['auth', 'verified'])->name('psychologist.index');
    Route::get('/ver/consultas/{id}', [PsychologistController::class, 'showSessions'])->name('psychologist.showSessions');
    Route::get('/ver/ficha/{id}/{schedule_id}', [PsychologistController::class, 'verFicha'])->name('psychologist.verFicha');
    Route::post('/salvar/ficha', [PsychologistController::class, 'salvarFicha'])->name('psychologist.salvarFicha');
    Route::get('/baixar/ficha/{id}', [PsychologistController::class, 'baixarFicha'])->name('psychologist.baixarFicha');
});

Route::prefix('secretary')->group(function () {
    Route::get('/{id}', [SecretaryController::class, 'index'])->middleware(['auth', 'verified'])->name('secretary.index');
    Route::get('/criar/cliente/{id}', [SecretaryController::class, 'createClient'])->middleware(['auth', 'verified'])->name('secretary.createClient');
    Route::post('/criar/cliente', [SecretaryController::class, 'storeClient'])->middleware(['auth', 'verified'])->name('secretary.storeClient');
    Route::get('/anunciar/chegada/{id}', [SecretaryController::class, 'anunciarChegada'])->name('secretary.anunciarChegada');
    Route::post('/criar/sessao/{id}/{schedule_id}', [SecretaryController::class, 'storeSession'])->middleware(['auth', 'verified'])->name('secretary.storeSession');
    Route::get('/criar/agendamento/{id}', [SecretaryController::class, 'criarAgendamento'])->name('secretary.criarAgendamento');
    Route::post('/criar/agendamento', [SecretaryController::class, 'storeAgendamento'])->middleware(['auth', 'verified'])->name('secretary.storeAgendamento');
});

require __DIR__ . '/auth.php';
