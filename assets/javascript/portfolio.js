var container = $(".background-wrap"),
    c = 2,
    max = 6;
    
setInterval(function(){advancePhase();}, 2000);
		
function advancePhase(){
  if(c > max){ c = 1;}
    container.attr("data-phase", c);
    c++;
 }

 advancePhase();