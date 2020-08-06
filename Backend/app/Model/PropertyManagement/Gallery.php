<?php

namespace App\Model\PropertyManagement;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    //
    protected $fillable = [
    	'text_on_gallery', 'image', 'property', 'status',
    ];

    protected $table = 'property_galleries';
}
