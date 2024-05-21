<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SessionHistory;
use App\Models\ScheduleHistory;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SessionHistoryController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $sessions = SessionHistory::all();

        return Inertia::render('SessionHistory/SessionHistory', [
            'sessions' => $sessions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create()
    // {

    // }

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
                'schedule_id' => 'required',
                'note' => 'required',
            ],
        );

        SessionHistory::create([
            'schedule_id' => $request->schedule_id,
            'note' => $request->note,
        ]);

        return Redirect::route('/') // TODO: ADD ROUTE
            ->with('success', 'Sessão cadastrada com sucesso!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function show($id)
    // {
    //
    // }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function edit($id)
    // {
    //
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $session = SessionHistory::findOrFail($id);

        $request->validate( //TODO: ADD VALIDATION
            [
                'schedule_id' => 'required',
                'note' => 'required',
            ],
        );

        $session->update([
            'schedule_id' => $request->schedule_id,
            'note' => $request->note,
        ]);

        return Redirect::route('/') // TODO: ADD ROUTE
            ->with('success', 'Sessão atualizada com sucesso!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $session = SessionHistory::findOrFail($id);

        $session->delete();

        return Redirect::route('/') //TODO: ADD ROUTE
            ->with('success', 'Sessão deletada com sucesso');
    }
}
