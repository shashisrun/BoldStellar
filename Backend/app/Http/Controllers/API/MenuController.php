<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MenuController extends Controller
{

    function __construct(
        \App\Menu $menu,
        \App\Library\Responses $response
    ){
        $this->menu = $menu;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->menu->all()->toArray();  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\MenuStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->menu->create($request->all());
        return ($response)? 
                    $this->response->Created('Menu Created Successfully') 
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
        $collection = $this->menu->find($id);
        return (!empty($collection))? $this->response->Success($collection) : $this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\MenuUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $menu = $this->menu->find($id);
        if(empty($menu)){
            return $this->response->notFound(); 
        }   

        try {
            $menu->update($request->all());
            return $this->response->Success('Menu updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't update menu, please try again later");
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
        if($this->menu->destroy($id)){
            return $this->response->Success('deleted Successfully');
        }else{
            return $this->response->BadRequest("can't delete menu, please try again later");
        }
    }

}