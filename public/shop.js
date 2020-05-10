
// var add=$('.add-to-cart');

function display(){

    console.log("ss");
}

var shoppingCart
function fetch(done){

    $.get('products',function(data){
    
    
    
    done(data);
    
    
    })
    
    
    }
    




   function addprod(imagePath,Description,name,price,done){

      
    $.post('products',{



        imagePath:imagePath,
        Description:Description,
        name:name,
        price:price


    }),function(data){

        done(data);
    }


       



   }










    
     function createproduct (product){
    
         
    
    
    return $(


        `
    
    
          
          <div class='col-sm-6 col-md-3'>

          <div class='thumbnail'>

                    <img class='im' src="${product.imagePath}">
              <div id='info1'>
                  <span class='type' style="color: grey; font-size:0.8em">${product.Description}</span>
                  <h6 class='card-title'>${product.name}</h6>
                  <span class="card-text"  class='price' style="font-size: 15px"><strong>₹${product.price}</strong></span>
                  
                  <button data-name="${product.name}" data-price="${product.price}" type="button" onclick= "add(${product.id},${product.price})" id= 'b' class="btn btn-outline-success add-to-cart">Add to cart</button>
      
                  </div>
        </div>
</div>  

`);

    }





shoppingCart = (function() {
  
    cart = [];
    
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total price
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = (item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item

  function add(name,price){
//   $('.add-to-cart').click(function(event) {
    // event.preventDefault();
    var name = name;
    var price = price;
    shoppingCart.addItemToCart(name, price, 1); 
    displayCart1();

//   });


  }
  
  
// }
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart1();
  });
  
  
  function displayCart1() {
    var cartArray1 = shoppingCart.listCart();
    var output = "";
    var av="av";
    for(var i in cartArray1) {
      output += "<tr>"
        + "<td>" + cartArray1[i].name+ "</td>" 
        + "<td>(" + cartArray1[i].price + ")</td>"
        + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray1[i].name + ">-</button>"
        + "<input type='number' class='item-count form-control' data-name='" + cartArray1[i].name + "' value='" + cartArray1[i].count + "'>"
        + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray1[i].name + ">+</button></div></td>"
        + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray1[i].name + ">X</button></td>"
        + " = " 
        + "<td>" + cartArray1[i].total + "</td>" 
        +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());

  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart1.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart1();
  });
  
//  displayCart1();
  

//  a.shoppingCart;