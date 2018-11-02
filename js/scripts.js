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
  this.currentId++;
  return this.currentId;
}
var newPizza = new Pizza("large", "onions, peppers", "sausage");
console.log(newPizza);
var newOrder = new Order();
newOrder.addPizza(newPizza);
console.log(newOrder);