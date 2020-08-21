<?php

namespace App\Http\Controllers\API\PropertyManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PropertyController extends Controller
{

    function __construct(
        \App\Model\PropertyManagement\Property $property,
        \App\Library\Responses $response 
    ){
        $this->property = $property;
        $this->response = $response;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->property->all()->toArray();  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->property->create($request->all());
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
        $collection = $this->property->find($id);
        return (!empty($collection))? $this->response->Success($collection) : $this->response->notFound();
        // dd($id);
        // $collection = new \StdClass();
        // $collection = $this->property->find($id);
        // if($collection->property == '')
        //     return $this->response->notFound();

        // foreach($collection->property as $property){
        //     dd($collection->property);
        // }

        // return (!empty($collection))? $this->response->Success($collection) : '';
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
        return 'update';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if($this->property->destroy($id)){
            return $this->response->Success('deleted Successfully');
        }else{
            return $this->response->BadRequest("can't delete property, please try again later");
        }
    }
}
