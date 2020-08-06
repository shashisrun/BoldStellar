<?php

namespace App\Model\PropertyManagement;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    //
    protected $fillable = [
    	'title', 'description', 'price', 'addr_street',	'addr_location', 'addr_area','addr_city', 'addr_state', 'addr_country', 'addr_pin', 'status', 'property_type', 'amenities', 'features', 'gallery', 'property_for', 'project',
    ];

    protected $table = 'properties';
}
