<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class menu extends Model
{
    //
    protected $fillable = [
    	'title', 'url','parent', 'status', 'sortby'
    ];
}
