<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetEmailController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    // Register
    Route::get('register', [RegisterUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisterUserController::class, 'store']);

    // Login
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    // Reset Password Email
    Route::get('forgot-password', [PasswordResetEmailController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetEmailController::class, 'store'])
        ->middleware("throttle:3,10")
        ->name('password.email');

    // Reset Password
    Route::get('reset-password/{email}/{hash}', [NewPasswordController::class, 'create'])
        ->middleware("signed")
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

// Email Verification
Route::get('verify-email/{email}/{hash}', VerifyEmailController::class)
    ->middleware(['signed'])
    ->name('verification.verify');

Route::middleware('auth')->group(function () {

    // Email Verification Notification
    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware("throttle:3,10")
        ->name('verification.send');

    // Update password 
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    // Logout
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
