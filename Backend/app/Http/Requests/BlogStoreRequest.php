<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;

class BlogStoreRequest extends FormRequest
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
            'meta_title  '  => 'required|string',
            'meta_description    '  => 'required|string',
            'meta_image  '  => 'required|string',
            'meta_keyword    '  => 'required|string',
            'status  '  => 'required|string',
            'title   '  => 'required|string',
            'content     '  => 'required|string',
            'slug    '  => 'required|string',
            'authored_by     '  => 'required|string',
            'authored_on     '  => 'required|string',
            'created_at  '  => 'required|string',
            'updated_at'  => 'required|string'
        ];
    }
}
