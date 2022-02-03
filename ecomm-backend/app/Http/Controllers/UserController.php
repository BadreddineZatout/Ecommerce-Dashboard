<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Register a new user
     *
     * @return void
     */
    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => hash('md5', $request->password)
        ]);
        return $user;
    }
    /**
     * log in users
     *
     * @return void
     */
    public function login()
    {
        return 'Login Api';
    }
}
