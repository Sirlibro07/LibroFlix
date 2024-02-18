<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WatchlistController;
use App\Http\Controllers\WatchlistItemController;
use App\Http\Resources\WatchlistResource;
use App\Models\Movie;
use App\Models\User;
use App\Models\Watchlist;
use App\Models\WatchlistItem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

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
    Route::get("{slug}", [MovieController::class, 'show'])->name("movies.show");
    Route::get("watch/{slug}", [MovieController::class, "watch"])->middleware("auth")->name("movies.watch");
});



// Watchlist Items
Route::middleware("auth")->prefix("watchlist")->group(function () {
    Route::get("", [WatchlistItemController::class, "index"])->name("watchlists_items.index");
    Route::post("{id}", [WatchlistItemController::class, "store"])->name("watchlist_items.store");
    Route::delete("{id}", [WatchlistItemController::class, "destroy"])->name("watchlist_items.destroy");
});


require __DIR__ . '/auth.php';
