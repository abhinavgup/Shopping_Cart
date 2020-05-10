
$(function(){



    var imagepath= $('#inputimagePath');

    var  Description= $('#inputDescription');

    var  name = $('#inputname');

    var  price =$('#inputprice');




    $('#bt').click(function(){

      
        addprod(

        imagepath.val(),
        Description.val(),
        name.val(),
        price.val(),

        // function(addprod1){

            alert("added" + " " + name.val() + " "+ "in database"));
        // }
                 

        // )
      

    })


})