<?php

namespace App\Model\PropertyManagement;

use Illuminate\Database\Eloquent\Model;

class Amenity extends Model
{
    //
    protected $fillable = [
    	'title', 'description', 'benifits',
    ];
    
    protected $table = 'property_amenities';
}
