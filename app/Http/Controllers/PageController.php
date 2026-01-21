<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);

    }

    public function about()
    {
        return Inertia::render('About/AboutIndex', []);
    }

    public function contact()
    {
        return Inertia::render('Contact/ContactIndex', []);
    }

    public function daftar()
    {
        return Inertia::render('Daftar/DaftarIndex' , []);
    }
}
