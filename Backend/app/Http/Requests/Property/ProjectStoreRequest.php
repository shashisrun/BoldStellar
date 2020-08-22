<?php

namespace App\Http\Requests\Property;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;
// use Sanitizer;

// class UserStoreRequest extends BaseFormRequest

class ProjectStoreRequest extends FormRequest
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
            'thumbnail'  => 'required|string',
            'cover_photo'  => 'required|string',
            'projectby'  => 'required|string',
            'status'  => 'required|string',
            'budget'  => 'required|string',
            'leader'  => 'required|string',
            'owner'  => 'required|string',
            'location'  => 'required|string'
        ];
    }
}
