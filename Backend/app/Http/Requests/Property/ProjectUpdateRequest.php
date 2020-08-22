<?php

namespace App\Http\Requests\Property;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;
// use Sanitizer;

// class UserStoreRequest extends BaseFormRequest

class ProjectUpdateRequest extends FormRequest
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
            'title'     => 'nullable|string|min:10|max:100',
            'description'  => 'nullable|string|min:50',
            'thumbnail'  => 'nullable|string',
            'cover_photo'  => 'nullable|string',
            'projectby'  => 'nullable|string',
            'status'  => 'nullable|string',
            'budget'  => 'nullable|string',
            'leader'  => 'nullable|string',
            'owner'  => 'nullable|string',
            'location'  => 'nullable|string'
        ];
    }
}
