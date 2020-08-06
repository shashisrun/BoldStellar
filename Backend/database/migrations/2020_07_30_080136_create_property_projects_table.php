<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertyProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('property_projects', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('cover_photo')->nullable();
            $table->string('projectby')->nullable();
            $table->enum('status', ['New Project', 'TPM Exclusive', 'active', 'inactive'])->nullable();
            $table->string('budget')->nullable();
            $table->string('leader')->nullable();
            $table->string('owner')->nullable();
            $table->string('location')->nullable();
            $table->timestamps();
            // $table->foreign('project')->references('id')->on('project_status'); // ['New Project', 'TPM Exclusive', 'active', 'inactive']
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('property_projects');
    }
}
