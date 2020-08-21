<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Admin;
class AdminController extends Controller
{
    //

    public function index()
    {
        dd('Hey There...');
    }

    public function login()
    {
        $user = Admin::where("email", request('email'))->first();
        if(!isset($user)){
            return "Admin Not found";
        }
        if (!Hash::check(request('password'), $user->password)) {
            return "Incorrect password";
        } 
        $tokenResult = $user->createToken('Admin');
        $user->access_token = $tokenResult->accessToken;
        $user->token_type = 'Bearer';
        return $user;
    }
}
