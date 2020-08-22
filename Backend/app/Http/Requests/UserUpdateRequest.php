<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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

    protected function failedAuthorization()
    {
        throw new AuthorizationException('Your new message goes here.');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'     => 'nullable|email|unique:users',
            'name'      => 'nullable|string|max:50',
            'password'  => 'nullable|min:8',
            'phone'     => 'nullable|min:10|max:12'
        ];
    }
}
