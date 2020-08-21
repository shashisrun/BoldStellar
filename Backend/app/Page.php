<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class page extends Model
{
    //
    protected $fillable = [
    	'content', 'title', 'status'
    ];
}
