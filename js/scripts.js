// business logic
const size =[{
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

const toppings=[{
    topping:"pineapple",
    price:100
},
{
    topping:"mushroom",
    price:100  
},
{
    topping:"bacon",
    price:100  
},
{
    topping:"extra cheese",
    price:100  
}]






































// user interface logic
$(document).ready(function(){
$("form#pizza").submit(function(e){
    e.preventDefault();

    let selectedType = $("select#type").val();
})

})