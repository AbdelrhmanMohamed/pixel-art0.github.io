$(function(){

    function makeGrid(){
 
      const wGrid = $('#Gwidth').val();
      const hGrid = $('#Gheight').val();
      const table = $("table");
      
      table.children().remove();

      for(let row = 0; row < wGrid; row++){
              
          table.append("<tr></tr>");

          for(let cols = 0; cols < hGrid; cols++){

            table.children().last().append("<td></td>");
          }
      }

      table.on("click","td",function (){
         
        const color = $("input[type='color']").val();
       
        $(this).attr("bgcolor", color);

      });

      table.on("dblclick", "td", function clearColor(){
        $(this).attr("bgcolor", "");     
        
    }); 

    }

    $("input[type='submit']").on('click',function(event){
        event.preventDefault();
        makeGrid();
     
    });
})