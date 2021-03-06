function Order(){
  this.pizzas=[];
  this.currentId=0;
}
function Pizza(size, veggieToppings, meatToppings){
  this.size=size,
  this.veggieToppings=veggieToppings,
  this.meatToppings=meatToppings
}
Order.prototype.addPizza=function(pizza){
  pizza.id=this.assignId();
  this.pizzas.push(pizza);
}
Order.prototype.assignId=function(){
  this.currentId+=1;
  return this.currentId;
}
Order.prototype.getTotal=function(){
  orderTotal=0;
  this.pizzas.forEach(function(pizza){
    orderTotal+=(pizza.getPrice());
  })
  return orderTotal;
}
Pizza.prototype.getPrice=function(){
  var pizzaPrice = 5;
  if(this.size==="large"){
    pizzaPrice+=4;
  };
  if(this.size==="medium"){
    pizzaPrice+=2;
  };
  // Two veggie toppings included, but add $2 for each extra
  if(this.veggieToppings.length>2){
    pizzaPrice = pizzaPrice +(2*(this.veggieToppings.length)-4);
  };
  this.meatToppings.forEach(function(topping){
    if(topping=="sausage"||topping=="chicken"){
    pizzaPrice+=4;
    }
    });
  return(pizzaPrice);
}

// ----front end----
var newOrder = new Order();
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputSize = ($('input[name=selectSize]:checked').val());
    var inputMeatToppings = [];
  $("input:checkbox[name=meats]:checked").each(function(){
      var checkedMeats = $(this).val();
      inputMeatToppings.push(checkedMeats);
    });
    var inputVeggieToppings = [];
    $("input:checkbox[name=veggies]:checked").each(function(){
        var checkedVeggies = $(this).val();
        inputVeggieToppings.push(checkedVeggies);
      });
    var newPizza = new Pizza(inputSize, inputVeggieToppings, inputMeatToppings);
    newOrder.addPizza(newPizza);
    var pizzaPrice=(newPizza.getPrice());
    $("p.viewOrder").show();
    $("span#viewPrice").text(pizzaPrice);
    var orderTotal=(newOrder.getTotal());
    $("span#viewOrderTotal").text(orderTotal);
  })
})
