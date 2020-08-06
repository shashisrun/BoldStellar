<?php

namespace App\Model\PropertyManagement;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    //
    protected $fillable = [
    	'title', 'description',
    ];

    protected $table = 'property_features';
}
