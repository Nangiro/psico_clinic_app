<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Patient;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $client = User::create([
            'username' => 'client',
            'name' => 'client',
            'email' => 'client@clinic.com',
            'password' => 'client',
            'type' => 1,
        ]);
        Patient::create([
            'user_id' => $client->id,
            'address' => 'Rua Teste',
            'cep' => '13332569',
            'number' => '69',
            'city' => 'Cidade Teste',
            'state' => 'SP',
            'cellphone' => '19999245035'
        ]);
        User::create([
            'username' => 'psico',
            'name' => 'psico',
            'email' => 'psico@clinic.com',
            'password' => 'psico',
            'type' => 2,
        ]);
        User::create([
            'username' => 'secretary',
            'name' => 'secretary',
            'email' => 'secretary@clinic.com',
            'password' => 'secretary',
            'type' => 3,
        ]);
    }
}
