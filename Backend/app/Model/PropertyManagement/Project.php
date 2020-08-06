<?php

namespace App\Model\PropertyManagement;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $fillable = [
    	'title', 'description', 'thumbnail', 'cover_photo', 'projectby', 'status', 'budget', 'leader', 'owner', 'location',
    ];

    protected $table = 'property_projects';

}
