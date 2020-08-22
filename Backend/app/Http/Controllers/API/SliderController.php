<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    function __construct( \App\Slider $slider, \App\Library\Responses $response){
        $this->slider = $slider;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->slider->all()->toArray(); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\SliderStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->slider->create($request->all());
        return ($response)? 
                    $this->response->Created('Slider Created Successfully') 
                    : $this->response->BadRequest();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection = $this->slider->find($id);
        return (!empty($collection))? $this->response->Success($collection) : $this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\SliderUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $slider = $this->slider->find($id);
        if(empty($slider)){
            return $this->response->notFound(); 
        }   

        try {
            $slider->update($request->all());
            return $this->response->Success('Slider updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't update slider, please try again later");
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
        $this->slider->destroy($id);
    }
}
