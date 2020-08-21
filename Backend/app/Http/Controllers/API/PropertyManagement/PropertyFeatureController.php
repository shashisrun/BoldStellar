<?php

namespace App\Http\Controllers\API\PropertyManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PropertyFeatureController extends Controller
{
    function __construct(
        \App\Model\PropertyManagement\Feature $feature,
        \App\Library\Responses $response
    ){
        $this->feature = $feature;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->feature->all()->toArray();  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\Property\FeatureStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->feature->create($request->all());
        if(!$response){
            return $this->response->BadRequest();
        }

        return $this->response->Created('Feature created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection = $this->feature->find($id);
        return (!empty($collection))? $this->response->Success($collection):$this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\Property\FeatureUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $feature = $this->feature->find($id);
        if(empty($feature)){
            return $this->response->notFound(); 
        }   

        try {
            $feature->update($request->all());
            return $this->response->Success('Feature updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't create feature, please try again later");
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
        if($this->feature->destroy($id)){
            return $this->response->Success('Feature deleted Successfully');
        }else{
            return $this->response->BadRequest("can't delete feature, please try again later");
        }
    }
}
