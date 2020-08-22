<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['cors']], function () {
    // ...
	Route::apiResources([
		'blog' => 'API\BlogController',
		'contact' => 'API\ContactController',
		'menu' => 'API\MenuController',
		'page' => 'API\PageController',
		'slider' => 'API\SliderController',
		'user' => 'API\UserController',
		'role' => 'Spatie\RoleController',
		'permission' => 'Spatie\PermissionController',		
		'gallery' => 'API\GalleryController',		
	]);

	// Property Management
	Route::group(['namespace' => 'API\PropertyManagement', 'prefix' => 'propertymanagement'], function(){ 
		Route::apiResources([		
			'amenity' => 'PropertyAmenityController',
			'property' => 'PropertyController',
			'feature' => 'PropertyFeatureController',
			'gallery' => 'PropertyGalleryController',
			'project' => 'PropertyProjectController',
			'property_for' => 'PropertyForController',
			'property_type' => 'PropertyTypeController'
		]);
	});	
});

Route::resource('admins', 'Auth\AdminController')->middleware('auth:admin');	

// Route::group(['prefix' => 'Role'], function(){
// 	Role::get('/', 'Spatie\RoleController@create');
// });



