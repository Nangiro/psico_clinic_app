<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ScheduleHistoryController;
use App\Http\Controllers\SessionHistoryController;
use App\Http\Controllers\UserSessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('patients')->group(function () {
    Route::get('/', [PatientController::class, 'index'])->name('patients.index');
    Route::get('/{id}', [PatientController::class, 'show'])->name('patients.show');
    Route::get('/create', [PatientController::class, 'create'])->name('patients.create');
    Route::post('/store', [PatientController::class, 'store'])->name('patients.store');
    Route::get('/edit', [PatientController::class, 'edit'])->name('patients.edit');
    Route::put('/update/{id}', [PatientController::class, 'update'])->name('patients.update');
    Route::delete('/destroy/{id}', [PatientController::class, 'destroy'])->name('patients.destroy');
});

Route::prefix('schedule-history')->group(function () {
    Route::get('/', [ScheduleHistoryController::class, 'index'])->name('schedule.history.index');
    Route::get('/{id}', [ScheduleHistoryController::class, 'show'])->name('schedule.history.show');
    Route::get('/create', [ScheduleHistoryController::class, 'create'])->name('schedule.history.create');
    Route::post('/store', [ScheduleHistoryController::class, 'store'])->name('schedule.history.store');
    Route::get('/edit', [ScheduleHistoryController::class, 'edit'])->name('schedule.history.edit');
    Route::put('/update/{id}', [ScheduleHistoryController::class, 'update'])->name('schedule.history.update');
    Route::delete('/destroy/{id}', [ScheduleHistoryController::class, 'destroy'])->name('schedule.history.destroy');
});

Route::prefix('session-history')->group(function () {
    Route::get('/', [SessionHistoryController::class, 'index'])->name('session.history.index');
    // Route::get('/{id}', [SessionHistoryController::class, 'show'])->name('session.history.show');
    // Route::get('/create', [SessionHistoryController::class, 'create'])->name('session.history.create');
    Route::post('/store', [SessionHistoryController::class, 'store'])->name('session.history.store');
    // Route::get('/edit', [SessionHistoryController::class, 'edit'])->name('session.history.edit');
    Route::put('/update/{id}', [SessionHistoryController::class, 'update'])->name('session.history.update');
    Route::delete('/destroy/{id}', [SessionHistoryController::class, 'destroy'])->name('session.history.destroy');
});

Route::prefix('user-session')->group(function () {
    Route::get('/', [UserSessionController::class, 'index'])->name('user.session.index');
    // Route::get('/{id}', [UserSessionController::class, 'show'])->name('user.session.show');
    // Route::get('/create', [UserSessionController::class, 'create'])->name('user.session.create');
    Route::post('/store', [UserSessionController::class, 'store'])->name('user.session.store');
    // Route::get('/edit', [UserSessionController::class, 'edit'])->name('user.session.edit');
    Route::put('/update/{id}', [UserSessionController::class, 'update'])->name('user.session.update');
    Route::delete('/destroy/{id}', [UserSessionController::class, 'destroy'])->name('user.session.destroy');
});

Route::post('/mail/form', [MailController::class, 'sendClinicForm'])->name('mail.form');

require __DIR__ . '/auth.php';
