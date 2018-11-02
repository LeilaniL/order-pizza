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
  debugger;
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
}
Pizza.prototype.getPrice=function(){
  var pizzaPrice = 5;
  if(this.size==="large"){
    pizzaPrice+=4;
  };
  if(this.size==="medium"){
    pizzaPrice+=2;
  };
  if(this.veggieToppings.length>=2){
    pizzaPrice+=3;
  }
  if(this.meatToppings=="sausage"||this.meatToppings=="chicken"){
    pizzaPrice+=4;
  }
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
    // $("span#viewOrderTotal").text(orderTotal);
    debugger;
    newOrder.getTotal();
  })
})
