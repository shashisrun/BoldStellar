<?php

namespace App\Http\Controllers\API\PropertyManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PropertyAmenityController extends Controller
{
    function __construct(
        \App\Model\PropertyManagement\Amenity $amenity,
        \App\Library\Responses $response
    ){
        $this->amenity = $amenity;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->amenity->all()->toArray();  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\Property\AmenityStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->amenity->create($request->all());
        if(!$response){
            return $this->response->BadRequest();
        }

        return $this->response->Created('Amenity created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection = $this->amenity->find($id);
        return (!empty($collection))? $this->response->Success($collection):$this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\Property\AmenityUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $amenity = $this->amenity->find($id);
        if(empty($amenity)){
            return $this->response->notFound(); 
        }   

        try {
            $amenity->update($request->all());
            return $this->response->Success('Amenity updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't create amenity, please try again later");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if($this->amenity->destroy($id)){
            return $this->response->Success('Amenity deleted successfully');
        }else{
            return $this->response->BadRequest("can't delete amenity, please try again later");
        }
    }
}
