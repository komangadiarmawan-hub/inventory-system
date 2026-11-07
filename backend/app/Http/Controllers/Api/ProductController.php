<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        
        return response()->json([
            'success' => true,
            'message' => 'Daftar data produk berhasil diambil',
            'data'    => $products
        ], 200);
    }
}