<?php

namespace App\Http\Controllers\API\PropertyManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PropertyGalleryController extends Controller
{
    function __construct(
        \App\Model\PropertyManagement\Gallery $gallery,
        \App\Library\Responses $response
    ){
        $this->gallery = $gallery;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->gallery->all()->toArray();  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\Property\GalleryStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->gallery->create($request->all());
        if(!$response){
            return $this->response->BadRequest();
        }

        return $this->response->Created('Media created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection = $this->gallery->find($id);
        return (!empty($collection))? $this->response->Success($collection) : $this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\Property\GalleryUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $gallery = $this->gallery->find($id);
        if(empty($gallery)){
            return $this->response->notFound(); 
        }   

        try {
            $gallery->update($request->all());
            return $this->response->Success('Media updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't create media, please try again later");
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
        if($this->gallery->destroy($id)){
            return $this->response->Success('deleted Successfully');
        }else{
            return $this->response->BadRequest("can't delete media, please try again later");
        }
    }
}
