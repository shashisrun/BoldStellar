<?php

namespace App\Http\Controllers\API\PropertyManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PropertyForController extends Controller
{
    function __construct(
        \App\Model\PropertyManagement\PropertyFor $property_for,
        \App\Library\Responses $response
    ){
        $this->property_for = $property_for;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->property_for->all()->toArray();  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\Property\PropertyforStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->property_for->create($request->all());
        if(!$response){
            return $this->response->BadRequest();
        }

        return $this->response->Created('Propertyfor created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection = $this->property_for->find($id);
        return (!empty($collection))? $this->response->Success($collection):$this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\Property\PropertyforUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $property_for = $this->property_for->find($id);
        if(empty($property_for)){
            return $this->response->notFound(); 
        }   

        try {
            $property_for->update($request->all());
            return $this->response->Success('Propertyfor updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't create Propertyfor, please try again later");
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
        if($this->property_for->destroy($id)){
            return $this->response->Success('deleted Successfully');
        }else{
            return $this->response->BadRequest("can't delete Propertyfor, please try again later");
        }
    }
}
