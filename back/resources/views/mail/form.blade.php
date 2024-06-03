<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
</head>

<body>
    <div>
        <div style="border-top: 1px solid rgba(0,0,0,0.05);">
            <div style="padding-left:30px ;padding-top: 60px; border-top: 1px solid rgba(0,0,0,0.05);text-align: left;">
                FORMULÁRIO DE CONTATO
            </div>
            <br>
            <ul style="margin-top: 2px;">
                <li>Nome: {{ $request->nome }}</li>
                <li>E-mail: {{ $request->email }}</li>
                <li>Mensagem: {{ $request->desc }}</li>
            </ul>
        </div>
    </div>
</body>

</html>
