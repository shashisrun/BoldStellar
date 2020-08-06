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
	]);

	// Property Management
	Route::group(['namespace' => 'API\PropertyManagement', 'prefix' => 'propertymanagement'], function(){ 
		Route::apiResources([		
			'property' => 'PropertyController',
			'amenity' => 'PropertyAmenityController',
			'feature' => 'PropertyFeatureController',
			'gallery' => 'PropertyGalleryController',
			'project' => 'PropertyProjectController',
			'property_for' => 'PropertyForController',
			'property_type' => 'PropertyTypeController',
		]);
	});
	
	// Route::namespace('API\PropertyManagement')->apiResources([		

	// 	// Property Management
	// 	'property' => 'PropertyController',
	// 	'amenity' => 'PropertyAmenityController',
	// 	'features' => 'PropertyFeatureController',
	// 	'gallery' => 'PropertyGalleryController',
	// 	'project' => 'PropertyProjectController',
	// 	'property_for' => 'PropertyForController',
	// 	'property_type' => 'PropertyTypeController',
	// ]);
	
});

// Route::group(['prefix' => 'Role'], function(){
// 	Role::get('/', 'Spatie\RoleController@create');
// });



