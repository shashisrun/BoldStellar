<?php

namespace App\Http\Controllers\API\PropertyManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PropertyTypeController extends Controller
{
    function __construct(
        \App\Model\PropertyManagement\PropertyType $property_type,
        \App\Library\Responses $response
    ){
        $this->property_type = $property_type;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->property_type->all()->toArray();  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // if (! $request->title or ! $request->url or ! $request->status or ! $request->sortby) 
        //     return $this->response->BadRequest('missing parameter');
        
        $this->property_type->create($request->all());

        return $this->response->Created();
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection = $this->property_type->find($id);
        return (!empty($collection))? $this->response->Success($collection) : $this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $property_type = $this->property_type->find($id);
        if($property_type->update($request->all())){
            return $this->response->Success('updated Successfully');
        }else{
            return $this->response->BadRequest("can't create property_type, please try again later");
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
        if($this->property_type->destroy($id)){
            return $this->response->Success('deleted Successfully');
        }else{
            return $this->response->BadRequest("can't delete property_type, please try again later");
        }
    }
}