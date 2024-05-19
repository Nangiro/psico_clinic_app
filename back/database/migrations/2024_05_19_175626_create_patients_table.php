<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users'); // USUÁRIO
            $table->string('name'); // NOME COMPLETO
            $table->string('address'); // RUA
            $table->string('number'); // NÚMERO DA RUA
            $table->string('city'); // CIDADE
            $table->string('state'); // ESTADO
            $table->string('country'); // PAÍS
            $table->string('cellphone'); // TELEFONE - CELULAR
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
