$(document).ready(function(){
  $("form#stress-quiz").submit(function(event){
    event.preventDefault();

    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      const workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });


   
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      const funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });


  });
});
/*
warningArray = [];
copingArray = [];
if (warningArray.length > copingArray.length) {
  $("#response1").show();
}
*/