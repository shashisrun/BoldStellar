<?php

namespace App\Http\Requests\Property;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Access\AuthorizationException;
// use Sanitizer;

// class UserStoreRequest extends BaseFormRequest

class PropertyUpdateRequest extends FormRequest
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
            'title'     => 'nullable|string',
            'description'     => 'nullable|string',
            'price'     => 'nullable|string',
            'addr_street'     => 'nullable|string',
            'addr_location'     => 'nullable|string',
            'addr_area'     => 'nullable|string',
            'addr_city'     => 'nullable|string',
            'addr_state'     => 'nullable|string',
            'addr_country'     => 'nullable|string',
            'addr_pin'     => 'nullable|string',
            'status'     => 'nullable|string',
            'property_type'     => 'nullable|string',
            'amenities'     => 'nullable|string',
            'features'     => 'nullable|string',
            'gallery'     => 'nullable|string',
            'property_for'     => 'nullable|string',
            'project'     => 'nullable|string',
        ];
    }
}
