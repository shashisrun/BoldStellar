<?php

namespace App\Http\Requests\Property;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;
// use Sanitizer;

// class UserStoreRequest extends BaseFormRequest

class PropertyTypeStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
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
            'name'     => 'required|string',
            'description'  => 'required|string|min:50',
            'status'  => 'required|string'
        ];
    }
}
