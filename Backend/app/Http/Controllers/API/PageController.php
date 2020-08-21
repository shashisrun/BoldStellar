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
    public function store(Request $request)
    {
        $this->page->create($request->all());
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
    public function update(Request $request, $id)
    {
        $page = $this->page->find($id);
        if($page->update($request->all())){
            return $this->response->Success('updated Successfully');
        }else{
            return $this->response->BadRequest();
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
