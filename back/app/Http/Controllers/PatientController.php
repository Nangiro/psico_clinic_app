<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\User;
use App\Models\ScheduleHistory;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PatientController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($id)
    {
        $patient = Patient::with('user')->where('user_id', $id)->first();
        $schedules = ScheduleHistory::with('psychologist')->where('patient_id', $patient->id)->orderBy('schedule_time', 'asc')->get();

        return Inertia::render('features/ClientePage', [
            'patient' => $patient,
            'schedules' => $schedules,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Patients/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate( //TODO: ADD VALIDATION
            [
                'user_id' => 'required|unique:patients',
                'address' => 'required',
                'number' => 'required',
                'city' => 'required',
                'estate' => 'required',
                'country' => 'required',
                'cellphone' => 'required',
            ],
        );

        Patient::create([
            'user_id' => $request->user_id,
            'address' => $request->address,
            'number' => $request->number,
            'city' => $request->city,
            'estate' => $request->estate,
            'country' => $request->country,
            'cellphone' => $request->cellphone,
        ]);

        return Redirect::route('/') // TODO: ADD ROUTE
            ->with('success', 'Paciente cadastrado com sucesso!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $patient = Patient::findOrFail($id);

        return Inertia::render('Patients/Info', [
            'patient' => $patient
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $patient = Patient::findOrFail($id);

        return Inertia::render('Patients/Edit', [
            'patient' => $patient
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);

        $request->validate( //TODO: ADD VALIDATION
            [
                'user_id' => 'required|unique:patients',
                'address' => 'required',
                'number' => 'required',
                'city' => 'required',
                'estate' => 'required',
                'country' => 'required',
                'cellphone' => 'required',
            ],
        );

        $patient->update([
            'user_id' => $request->user_id,
            'address' => $request->address,
            'number' => $request->number,
            'city' => $request->city,
            'estate' => $request->estate,
            'country' => $request->country,
            'cellphone' => $request->cellphone,
        ]);

        return Redirect::route('/') //TODO: ADD ROUTE
            ->with('success', 'Paciente atualizado com sucesso!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $patient = Patient::findOrFail($id);

        if ($patient->user->id == auth()->user()->id) {
            return Redirect::route('/')
                ->with('error', 'Erro, não é possível apagar sua própria conta.');
        }

        $patient->delete();

        return Redirect::route('/') //TODO: ADD ROUTE
            ->with('success', 'Paciente deletado com sucesso');
    }
}