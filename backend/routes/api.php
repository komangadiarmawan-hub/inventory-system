<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\SupplierController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\TransactionController;

// Public Route
Route::post('/login', [AuthController::class, 'login']);


    Route::middleware('auth:sanctum')->group(function () {
    Route::middleware('auth:sanctum')->get('/products', [ProductController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::apiResource('/categories', CategoryController::class);
    Route::apiResource('/suppliers', SupplierController::class);
    Route::apiResource('/products', ProductController::class);
    Route::apiResource('/transactions', TransactionController::class);
});