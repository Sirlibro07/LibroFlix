<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/





// Profile
Route::middleware('auth')->prefix("profile")->group(function () {
    Route::get('', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Home
Route::get('/', HomeController::class)->name("home");

// Movies
Route::prefix("movies")->group(function () {
    Route::get("search/{title?}", [MovieController::class, 'index'])->name("movies.index");
    Route::get("{title}", [MovieController::class, 'show'])->name("movies.show");
    Route::get("watch/{title}", [MovieController::class, "watch"])->middleware("auth")->name("movies.watch");
});



require __DIR__ . '/auth.php';
