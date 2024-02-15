<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WatchlistController;
use App\Http\Resources\WatchlistResource;
use App\Models\User;
use App\Models\Watchlist;
use App\Models\WatchlistItem;
use Illuminate\Support\Facades\Auth;
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



// Home
Route::get('/', HomeController::class)->name("home");


// Profile
Route::middleware('auth')->prefix("profile")->group(function () {
    Route::get('', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Movies
Route::prefix("movies")->group(function () {
    Route::get("search/{title?}", [MovieController::class, 'index'])->name("movies.index");
    Route::get("{title}", [MovieController::class, 'show'])->name("movies.show");
    Route::get("watch/{title}", [MovieController::class, "watch"])->middleware("auth")->name("movies.watch");
});


// Watchlist
Route::middleware("auth")->prefix("watchlist")->group(function () {
    Route::get("", [WatchlistController::class, "index"])->name("watchlist.index");
});

require __DIR__ . '/auth.php';
