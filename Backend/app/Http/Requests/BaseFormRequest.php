<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Waavi\Sanitizer\Laravel\SanitizesInput;

abstract class BaseFormRequest extends FormRequest
{
    use SanitizesInput;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function validateResolved()
    {
        {
            $this->sanitize();
            parent::validateResolved();
        }
    }


    abstract public function authorize();

    /**
     *  Validation rules to be applied to the input.
     *
     *  @return array
     */
    abstract public function rules();

    /**
     *  Filters to be applied to the input.
     *
     *  @return array
     */
    abstract public function filters();
}
