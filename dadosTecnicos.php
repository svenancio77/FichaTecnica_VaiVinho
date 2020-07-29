
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="captura.js"></script>
  <script src="all.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <style>
    body{
      margin-left: 30px;
      margin-top:-50px;
      padding: 30px;
      }
      input{
        display: block;
      }
      textArea{
        width: 100%;
      }
  </style>
  


<?php

$notas = $_POST['notas'];
$titulo = $_POST['titulo'];
$origem = $_POST['origem'];
$regiao = $_POST['regiao'];
$produtor = $_POST['produtor'];
$safra = $_POST['safra'];
$temperatura = $_POST['temp'];
$uvas = $_POST['uvas'];
$teor = $_POST['teor'];
$amadurecimento = $_POST['amadurecimento'];
$guarda = $_POST['tempguarda'];
$harmonizacao = $_POST['harmonizacao'];
$vindima = $_POST['vindima'];

print "Notas de Prova: $notas</br>";
print "Título: $titulo</br>";
print "Origem: $origem</br>";
print "Região: $regiao</br>";
print "Produtor: $produtor</br>";
print "Safra: $safra</br>";
print "Temp. de Serviço: $temperatura</br>";
print "Uvas: $uvas</br>";
print "Teor Alcoólico: $teor</br>";
print "Amadurecimento: $amadurecimento</br>";
print "Tempo de guarda: $guarda</br>";
print "Harmonização: $harmonizacao</br>";
print "Vindima: $vindima</br>";

?>

<div>
  <button style="float:left; margin-top:10px" onclick="copiarHTML()">Copiar HTML</button>
  </br>
  </div>
  
  <div>
  <button style="float:left; margin-top:-14px; margin-left:14px" onclick="colarCodigo()">Colar Código</button>
  </div>
 
