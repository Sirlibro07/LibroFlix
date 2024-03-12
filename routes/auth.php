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
        ->name('register.create');

    Route::post('register', [RegisterUserController::class, 'store'])
        ->name('register.store');

    // Login
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login.create');

    Route::post('login', [AuthenticatedSessionController::class, 'store'])
        ->name('login.store');

    // Reset Password Email
    Route::get('forgot-password', [PasswordResetEmailController::class, 'create'])
        ->name('password_reset_email.create');

    Route::post('forgot-password', [PasswordResetEmailController::class, 'store'])
        ->middleware("throttle:1,60")
        ->name('password_reset_email.store');

    // Reset Password
    Route::get('reset-password/{user:email}/{token}', [NewPasswordController::class, 'create'])
        ->middleware("signed")
        ->name('password_reset.create');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password_reset.store');
});

// Email Verification
Route::get('verify-email/{user:email}/{token}', VerifyEmailController::class)
    ->middleware(['signed'])
    ->name('verification.verify');

Route::middleware('auth')->group(function () {
    // Email Verification Notification
    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware("throttle:1,60")
        ->name('email_verification_notification.store');

    // Update password
    Route::put('password', [PasswordController::class, 'update'])
        ->name('password.update');

    // Logout
    Route::delete('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout.store');
});
