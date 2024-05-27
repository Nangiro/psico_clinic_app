<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserSession;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserSessionController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    // public function index(Request $request)
    // {
    //
    // }

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
                'user_id' => 'required',
                'token' => 'required',
            ],
        );

        UserSession::create([
            'user_id' => $request->user_id,
            'token' => $request->token,
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
        $session = UserSession::findOrFail($id);

        $request->validate( //TODO: ADD VALIDATION
            [
                'user_id' => 'required',
                'token' => 'required',
            ],
        );

        $session->update([
            'user_id' => $request->user_id,
            'token' => $request->token,
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
        $session = UserSession::findOrFail($id);

        $session->delete();

        return Redirect::route('/') //TODO: ADD ROUTE
            ->with('success', 'Sessão deletada com sucesso');
    }
}
