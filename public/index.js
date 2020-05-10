   $(function(){
    
    
        let p= $('#row3');
 
          
    fetch(function (products){

        

          for(product of products){
    
        p.append(createproduct(product));

          }

    })
    
    
    
    
})


