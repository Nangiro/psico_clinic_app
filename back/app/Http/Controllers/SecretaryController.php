<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Patient;
use App\Models\ScheduleHistory;
use App\Models\SessionHistory;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Carbon\Carbon;

class SecretaryController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('features/SecretariaPage', [
            'user' => $user
        ]);
    }

    public function createClient($id)
    {
        return Inertia::render('features/CadastrarClientePage', [
            'id' => $id
        ]);
    }

    public function storeClient(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
                'email' => 'required|unique:users',
                'address' => 'required',
                'number' => 'required',
                'city' => 'required',
                'state' => 'required',
                'username' => 'required|unique:users',
                'password' => 'required',
                'name' => 'required',
                'cellphone' => 'required',
                'cep' => 'required',
            ],
        );

        $user = User::create([
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'type' => 1,
        ]);

        Patient::create([
            'user_id' => $user->id,
            'address' => $request->address,
            'number' => $request->number,
            'cep' => $request->cep,
            'city' => $request->city,
            'state' => $request->state,
            'cellphone' => $request->cellphone,
        ]);

        return Redirect::route('secretary.index', $request->id)
            ->with('success', 'Paciente cadastrado com sucesso!');
    }

    public function anunciarChegada($id)
    {
        $schedules = ScheduleHistory::with(['psychologist', 'patient.user'])->doesnthave('session')->where('schedule_time', '>=', now())->orderBy('schedule_time', 'asc')->get();
        return Inertia::render('features/AnunciarChegadaPage', [
            'id' => $id,
            'schedules' => $schedules
        ]);
    }

    public function storeSession($id, $schedule_id)
    {
        SessionHistory::create([
            'schedule_history_id' => $schedule_id
        ]);
        return Redirect::route('secretary.index', $id)
            ->with('success', 'Sessão cadastrada com sucesso!');
    }

    public function criarAgendamento($id)
    {
        return Inertia::render('features/CriarAgendamentoPage', [
            'id' => $id,
            'clientes' => User::where('type', 1)->get(),
            'psicologas' => User::where('type', 2)->get()
        ]);
    }

    public function storeAgendamento(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
                'pacient_id' => 'required',
                'psicologa_id' => 'required',
                'schedule_at' => 'required|after:' . date('Y-m-d H:i'),
            ],
        );
        $schedule_time = Carbon::parse($request->schedule_at);
        $user = User::findOrFail($request->pacient_id);
        $patient = Patient::where('user_id', $user->id)->first();

        ScheduleHistory::create([
            'patient_id' => $patient->id,
            'psychologist_id' => $request->psicologa_id,
            'schedule_time' => $schedule_time,
        ]);

        return Redirect::route('secretary.index', $request->id)
            ->with('success', 'Agendamento cadastrado com sucesso!');
    }
}
