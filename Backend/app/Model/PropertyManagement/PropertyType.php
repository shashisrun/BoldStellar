<?php

namespace App\Model\PropertyManagement;

use Illuminate\Database\Eloquent\Model;

class PropertyType extends Model
{
    //
    protected $fillable = [
    	'name', 'description', 'status',
    ];

    protected $table = 'property_types';
    	
}
