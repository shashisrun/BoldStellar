<?php

namespace App\Library;

use Illuminate\Http\Request;
use \App\Http\Controllers\Controller;

class Responses extends Controller
{
    
    public function Success($msg='Success',$type='text/json')
    {
        // $msg = $this->createMsg($msg,'Success');
        // if($type = 'text/json')
        //     $type = $this->detectArrayOrObjectOrMessage($msg);
        // return Response(json_encode($msg), 200)->header('Content-Type', $type);
        return response()->json(['code' => 200, 'message' => $msg])->header('Content-Type', $type);
    }

    public function Created($msg='Created Successfully', $type='text/json')
    {
        // $msg = $this->createMsg($msg,'Created Successfully');
        return response()->json(['code' => 200, 'message' => $msg])->header('Content-Type', $type);
    }

    public function BadRequest($msg='Something went wrong, please try again later!', $type='text/json')
    {
        // $msg = $this->createMsg($msg,'Something went wrong, please try again later!');
        // return Response(json_encode($msg), 200)->header('Content-Type', $type);
        return response()->json(['code' => 500, 'message' => $msg], 500)->header('Content-Type', $type);
    }

    public function notFound($msg='Row Not Found', $type='text/json')
    {
        // $msg = $this->createMsg($msg,'Row Not Found');
        return response()->json(['code' => 404, 'msg' => $msg], 404)->header('Content-Type', $type);
        // return Response(json_encode($msg), 200)->header('Content-Type', $type);
    }

    public function detectArrayOrObject($data)
    {
        if(is_array($data))
            return 'text/json';
        if(is_object($data))
            return '';
    } 

    public function createMsg($data, $msg='')
    {
        return ($data == '')? json_encode($msg) : $data;
           
    }   

}
