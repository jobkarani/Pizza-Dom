// business logic
let size =[{
    size: "small",
    price:500
},
{
    size: "medium",
    price:750  
},
{
    size: "large",
    price:950  
},
{
    size: "mega",
    price:1200  
}];

let toppings=[{
    name:"pineapple",
    price:100
},
{
    name:"mushroom",
    price:100  
},
{
    name:"bacon",
    price:100  
},
{
    name:"extra cheese",
    price:100  
}];

let crust = [{
    name:"crispy",
    price:200,
},
{
    name:"stuffed",
    price:300, 
},
{
    name:"glutten-free",
    price:400, 
}];

let type = [{ name:"Hawaiian Pizza"},
{ name:"Cheese Pizza"},
{ name:"Pepperoni Pizza"},
{ name:"Chicken Pizza"},
{ name:"Veggie Pizza"},
{ name:"Meat Pizza"}
]






































// user interface logic
$(document).ready(function(){
$("form#pizza").submit(function(e){
    e.preventDefault();

    let selectedType = $("select#type").val();
})

})