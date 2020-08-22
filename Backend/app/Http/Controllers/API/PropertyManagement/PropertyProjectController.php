<?php

namespace App\Http\Controllers\API\PropertyManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PropertyProjectController extends Controller
{
    function __construct(
        \App\Model\PropertyManagement\Project $project,
        \App\Library\Responses $response
    ){
        $this->project = $project;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->project->all()->toArray();                 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\Property\ProjectStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->project->create($request->all());
        if(!$response){
            return $this->response->BadRequest();
        }

        return $this->response->Created('Project created successfully');
    }      

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection = $this->project->find($id);
        return (!empty($collection))? $this->response->Success($collection) : $this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\Property\ProjectUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $project = $this->project->find($id);
        if(empty($project)){
            return $this->response->notFound(); 
        }   

        try {
            $project->update($request->all());
            return $this->response->Success('Project updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't create project, please try again later");
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
        if($this->project->destroy($id)){
            return $this->response->Success('deleted Successfully');
        }else{
            return $this->response->BadRequest("can't delete project, please try again later");
        }
    }
}
