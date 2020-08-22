<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;

class SliderUpdateRequest extends FormRequest
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
            'title  '  => 'nullable|string',
            'url  '  => 'nullable|string',
            'image  '  => 'nullable|string',
            'text_on_slider  '  => 'nullable|string',
            'sort_by status  '  => 'nullable|string',
            'group  '  => 'nullable|string'
        ];
    }
}

