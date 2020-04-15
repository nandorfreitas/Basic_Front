//Definindo Nome e Gênero

$(function(){
$("#sub").click(function(e){
$("#p1").html("Olá, "+$("#nomeCaixa").val()+" você é "+$("input.sexo:radio:checked").val());  
     e.preventDefault();}); 
   
//Mudando cor das caixas
    
$("input:checkbox").change( function(){
    var bloco=$(this).attr("bloco");
    var cor=$(this).attr("cor");
    if ($(this).prop("checked") == true){
        $("#"+bloco).css("background-color", cor);
        }
    else{
        $("#"+bloco).css("background-color", "lightgray");}});
    
//Calculando as datas    
    
$("#submit2").click (function (){
    var data1 = Date.parse(new Date(document.getElementById("diaHoje").value));
    var data2 = Date.parse(new Date(document.getElementById("dataNiver").value));
    var diff = Math.floor((data1 - data2)/(31580150000));
$("#resposta").html(""+$("#nomeCaixa").val()+" você tem "+diff+" anos!");});
    
//Escolhendo a mensagem de despedida
    
$("#submit3").click (function (){
        var selectValor=$("#ss").val();
         alert (selectValor);})});



                               