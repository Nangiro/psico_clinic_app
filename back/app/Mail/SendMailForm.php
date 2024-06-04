<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMailForm extends Mailable
{
    use Queueable, SerializesModels;

    protected $request;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request)
    {
        $this->request = $request;
    }

    /**
     * Build the message.
     */
    public function build(): static
    {
        $mail = $this->from('oper-psico@clinic.com')
            ->replyTo('oper-psico@clinic.com')
            ->subject('Formulário de Contato');

        $mail = $mail->view('mail.form', ['request' => $this->request]);

        return $mail;
    }
}
