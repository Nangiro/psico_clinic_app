<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {

            $type = Auth::user()->type;

            switch ($type) {
                case 1:
                    return redirect(route('patient.index', Auth::user()->id));
                    break;

                case 2:
                    return redirect(route('psychologist.index', Auth::user()->id));
                    break;

                case 3:
                    return redirect(route('secretary.index', Auth::user()->id));
                    break;

                default:
                    return redirect(route('index'));
                    break;
            }
        } else {
            return redirect(route('index'));
        }
        return $next($request);
    }
}
