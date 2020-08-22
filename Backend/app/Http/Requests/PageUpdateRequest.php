<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;

class PageUpdateRequest extends FormRequest
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
            'meta_title'  => 'nullable|string',
            'meta_description'  => 'nullable|string',
            'meta_image'  => 'nullable|string',
            'meta_keyword'  => 'nullable|string',
            'url'  => 'nullable|string',
            'status'  => 'nullable|string',
            'title'  => 'nullable|string',
            'content'  => 'nullable|string',
            'slug'  => 'nullable|string'
        ];
    }
}
