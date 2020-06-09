$(document).ready(function(){
$("form#stress-quiz").submit(function(event){
  event.preventDefault();
  let warningArray = [];
  let copingArray = [];
  
  $("input:checkbox[name=warning-signs]:checked").each(function(){
    const warningSigns = $(this).val();
    warningArray.push(warningSigns);
  });
  $("input:checkbox[name=coping-method]:checked").each(function(){
    const copingMethods = $(this).val();
    copingArray.push(copingMethods);
  });
  
  if (warningArray.length > copingArray.length) {
    $("#response1").show();
  } else if (copingArray.length === warningArray.lengh) {
    $("#response2").show();
  } else {
    $("#response3").show();
  }

  });
});
