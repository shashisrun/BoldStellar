<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
// use Sanitizer;

// class UserStoreRequest extends BaseFormRequest

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        /*example */
            // $postId = $this->route('post');

            // //here the authorization to edit the post is checked through the Gate facade
            // return Gate::allows('update', Post::findOrFail($postId));
        /*end example*/
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'     => 'required|email|unique:users',
            'name'      => 'required|string|max:50',
            'password'  => 'required|min:8',
            'phone'     => 'required|min:10|max:12'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Email is required!',
            'name.required' => 'Name is required!',
            'password.required' => 'Password is required!'
        ];
    }

    public function filters()
    {
        return [
            'email' => 'trim|lowercase',
            'name' => 'trim|capitalize|escape'
        ];
    }


}
