<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PageController extends Controller
{
    function __construct(
        \App\Page $page,
        \App\Library\Responses $response
    ){
        $this->page = $page;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->page->all()->toArray(); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\PageStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->page->create($request->all());
        return ($response)? 
                    $this->response->Created('Page Created Successfully') 
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
        $collection = $this->page->find($id);
        if(empty($collection)){
            $title = str_replace("-", " ", $id);
            $collection = $this->page->where('title', $title);
        }
        return (!empty($collection))? $this->response->Success($collection) : $this->response->BadRequest();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\PageUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $page = $this->page->find($id);
        if(empty($page)){
            return $this->response->notFound(); 
        }   

        try {
            $page->update($request->all());
            return $this->response->Success('Page updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't update page, please try again later");
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
        $this->page->destroy($id);
    }

}
