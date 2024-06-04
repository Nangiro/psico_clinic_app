<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\SessionHistory;
use App\Models\Patient;
use App\Models\ScheduleHistory;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PsychologistController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('features/PsicologaPage', [
            'user' => $user
        ]);
    }

    public function showSessions($id)
    {
        $schedules = ScheduleHistory::has('session')->with('patient.user')->where('psychologist_id', $id)->orderBy('schedule_time', 'asc')->get();
        return Inertia::render('features/VerConsultas', [
            'id' => $id,
            'schedules' => $schedules,
        ]);
    }

    public function verFicha($id, $schedule_id)
    {
        $schedule = ScheduleHistory::with(['patient', 'session'])->findOrFail($schedule_id);
        $patient = Patient::with('user')->findOrFail($schedule->patient->id);
        return Inertia::render('features/VerFicha', [
            'id' => $id,
            'schedule' => $schedule,
            'patient' => $patient
        ]);
    }

    public function salvarFicha(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
                'note' => 'required',
            ],
        );

        $schedule = ScheduleHistory::with('session')->findOrFail($request->id);
        $session = SessionHistory::findOrFail($schedule->session->id);

        $session->update([
            'note' => $request->note,
        ]);

        return Redirect::back();
    }

    public function baixarFicha($id)
    {
        if ($id == 1) {
            $file = '/modelo_atestado.docx';
            return Storage::download($file);
        } elseif ($id == 2) {
            $file = '/modelo_encaminhamento.docx';
            return Storage::download($file);
        }
    }
}
