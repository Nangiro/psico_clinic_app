<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ScheduleHistory;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ScheduleHistoryController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $schedules = ScheduleHistory::all();

        return Inertia::render('ScheduleHistory/ScheduleHistory', [
            'schedules' => $schedules
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('ScheduleHistory/Create', [
            'patients' => User::where('type', 1),
            'psychologists' => User::where('type', 2),
        ]);
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
                'patient_id' => 'required',
                'psychologist_id' => 'required',
            ],
        );

        ScheduleHistory::create([
            'patient_id' => $request->patient_id,
            'psychologist' => $request->psychologist_id,
        ]);

        return Redirect::route('/') // TODO: ADD ROUTE
            ->with('success', 'Consulta cadastrada com sucesso!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $schedule = ScheduleHistory::findOrFail($id);

        return Inertia::render('ScheduleHistory/Info', [
            'schedule' => $schedule,
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
        $schedule = ScheduleHistory::findOrFail($id);

        return Inertia::render('ScheduleHistory/Edit', [
            'patients' => User::where('type', 1),
            'psychologists' => User::where('type', 2),
            'schedule' => $schedule,
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
        $schedule = ScheduleHistory::findOrFail($id);

        $request->validate( //TODO: ADD VALIDATION
            [
                'patient_id' => 'required',
                'psychologist_id' => 'required',
            ],
        );

        $schedule->update([
            'patient_id' => $request->patient_id,
            'psychologist' => $request->psychologist_id,
        ]);

        return Redirect::route('/') // TODO: ADD ROUTE
            ->with('success', 'Consulta atualizada com sucesso!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $schedule = ScheduleHistory::findOrFail($id);

        $schedule->sessions()->detach(); // Remover relação de sessões
        $schedule->delete();

        return Redirect::route('/') //TODO: ADD ROUTE
            ->with('success', 'Consulta deletada com sucesso');
    }
}
