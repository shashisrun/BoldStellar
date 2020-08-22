<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    function __construct( \App\Blog $blog, \App\Library\Responses $response){
        $this->blog = $blog;
        $this->response = $response;
    }
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $collection = $this->blog->all()->toArray();   
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\BlogStoreRequest $request)
    {       
        $validator = $request->validated();
        $response = $this->blog->create($request->all());
        return ($response)? 
                    $this->response->Created('Blog Created Successfully') 
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
        $collection = $this->blog->find($id);
        return (!empty($collection))? $this->response->Success($collection) : $this->response->notFound();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\BlogUpdateRequest $request, $id)
    {
        $validator = $request->validated();
        $blog = $this->blog->find($id);
        if(empty($blog)){
            return $this->response->notFound(); 
        }   

        try {
            $blog->update($request->all());
            return $this->response->Success('Blog updated successfully');
        } catch (Exception $e) {
           // return $e->getMessage();  
           return $this->response->BadRequest("can't update blog, please try again later");
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
        if($this->blog->destroy($id)){
            return $this->response->Success('Blog deleted Successfully');
        }else{
            return $this->response->BadRequest("can't delete blog, please try again later");
        }    }

}
