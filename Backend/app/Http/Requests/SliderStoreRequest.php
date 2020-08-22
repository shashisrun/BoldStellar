<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;

class SliderStoreRequest extends FormRequest
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
            'title  '  => 'required|string',
            'url  '  => 'required|string',
            'image  '  => 'required|string',
            'text_on_slider  '  => 'required|string',
            'sort_by status  '  => 'required|string',
            'group  '  => 'required|string'
        ];
    }
}
title
url
image
text_on_slider
sort_by status
group
