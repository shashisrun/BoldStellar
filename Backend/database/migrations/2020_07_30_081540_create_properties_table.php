<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->Float('price')->default(0);
            $table->string('addr_street')->nullable();
            $table->string('addr_location')->nullable();
            $table->string('addr_area')->nullable();
            $table->string('addr_city')->nullable();
            $table->string('addr_state')->nullable();
            $table->string('addr_country')->nullable();
            $table->integer('addr_pin')->nullable();
            $table->enum('status', ['active', 'draft', 'trash'])->nullable();
            $table->unsignedBigInteger('property_type')->nullable();
            $table->unsignedBigInteger('amenities')->nullable();
            $table->unsignedBigInteger('features')->nullable();
            $table->unsignedBigInteger('gallery')->nullable();
            $table->unsignedBigInteger('property_for')->nullable();
            $table->unsignedBigInteger('project')->nullable();
            $table->foreign('property_type')->references('id')->on('property_types');
            $table->foreign('amenities')->references('id')->on('property_amenities');
            $table->foreign('features')->references('id')->on('property_features');
            $table->foreign('gallery')->references('id')->on('property_galleries');
            $table->foreign('property_for')->references('id')->on('properties_for');
            $table->foreign('project')->references('id')->on('property_projects');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
