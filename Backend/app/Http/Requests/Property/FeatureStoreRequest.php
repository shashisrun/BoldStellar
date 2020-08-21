<?php

namespace App\Http\Requests\Property;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;
// use Sanitizer;

// class UserStoreRequest extends BaseFormRequest

class FeatureStoreRequest extends FormRequest
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
            'title'     => 'required|string|min:10|max:100',
            'description'  => 'required|string|min:50',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Title is required!',
            'description.required' => 'Description is required!',
        ];
    }

    public function filters()
    {
        return [
            'title' => 'trim|lowercase',
            'description' => 'trim|capitalize|escape',
        ];
    }


}
