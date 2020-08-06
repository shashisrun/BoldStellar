<?php

namespace App\Http\Controllers\Spatie;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    function __construct( Permission $permission, \App\Library\Responses $response){
        $this->permission = $permission;
        $this->response = $response;

    }




    
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $collection = $this->permission->all()->pluck('name');
        return (!$collection->isEmpty())? $this->response->Success($collection) : $this->response->notFound();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $permission = Permission::create(['name' => 'Create']);
        $permission = Permission::create(['name' => 'Read']);
        $permission = Permission::create(['name' => 'Update']);
        $permission = Permission::create(['name' => 'Delete']);
        $role = Role::create(['name' => 'Administrator']);
        $role = Role::create(['name' => 'Author']);
        $role = Role::create(['name' => 'Moderator']);
        $role = Role::create(['name' => 'Subscriber']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection = $this->permission->find($id);
        if($collection){
            $collection = $collection->toArray();
        }
        return ($collection)? $this->response->Success($collection) : $this->response->notFound();
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
        $permission = $this->permission->find($id);
        if($permission->update($request->all())){
            return $this->response->Success('updated Successfully');
        }else{
            return $this->response->BadRequest("can't update permission, please try again later");
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
        if($this->permission->destroy($id))
            return $this->response->Success('deleted Successfully');
        else
            return $this->response->BadRequest("can't delete permission, please try again later");
    }
}
