<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function __construct( \App\Contact $contact, \App\Library\Responses $response){
        $this->contact = $contact;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->contact->all()->toArray(); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\ContactStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->contact->create($request->all());
        return ($response)? 
                    $this->response->Created('Contact Created Successfully') 
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
        $collection = $this->contact->find($id);
        return (!empty($collection))? $this->response->Success($collection) : $this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\ContactUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $contact = $this->contact->find($id);
        if(empty($contact)){
            return $this->response->notFound(); 
        }   

        try {
            $contact->update($request->all());
            return $this->response->Success('Contact updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't update contact, please try again later");
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
        $this->contact->destroy($id);
    }

}
