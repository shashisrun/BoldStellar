<?php

namespace App\Model\PropertyManagement;

use Illuminate\Database\Eloquent\Model;

class PropertyFor extends Model
{
    //
    protected $fillable = [
    	'name', 'status',
    ];

    protected $table = 'properties_for';
}
