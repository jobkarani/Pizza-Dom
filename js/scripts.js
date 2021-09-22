function order() {
    
var size = document.querySelector('input[name="size"]:checked').value; console.log("size="+size);
var sizePrice = 0;
if (size === "Small") {
    sizePrice = 500;
};
if (size === "Medium") {
    sizePrice = 750;
};
if (size === "Large") {
    sizePrice = 1050;
};
 console.log("sizePrice="+sizePrice);

var crust = document.querySelector('input[name="crust"]:checked').value; console.log("crust="+crust);
var crustPrice = 0;
if (crust === "flat-bread") {
        crustPrice= 350;
    };
    if (crust === "crispy") {
        crustPrice = 200;
    };
     if (crust === "stuffed") {
        crustPrice = 250;
    };
      if (crust === "glutten-free") {
        crustPrice = 300;
    };
 
  console.log("crustPrice="+crustPrice);

var toppingPrice = 0;
var topping = document.getElementsByName("topping");
var toppingSelect = [];
for (var i = 0; i<topping.length; i++) {
    if (topping[i].checked) {
        toppingSelect.push(topping[i].value);
    };
 console.log("toppingSelect="+toppingSelect);

    console.log("toppingPrice="+toppingPrice);
};
toppingPrice = toppingSelect.length * 100; 
console.log("toppingPrice="+toppingPrice);

let quantity = parseInt(document.getElementById("quantity").value);

var totalPrice = ((toppingPrice + crustPrice + sizePrice)*quantity);
 console.log("totalPrice="+totalPrice);

$("#size").html(size+"KShs "+sizePrice+".00");
$("#crust").html(crust+"Kshs "+crustPrice+".00");
$("#toppings").html(toppingSelect+"Kshs "+toppingPrice+".00");
$("#qty").html(quantity);
$("#cost").html(totalPrice);
$("#totalprice").html(" KShs " + totalPrice+".00");

$(document).ready(function(){
    $("#contact").submit(function(event){
        event.preventDefault();

        var personName = $("#fname").val();
        var personLocation = $("#location").val();

        let deliveryCost = totalPrice + parseInt(200) ;
        
        alert("Hey "+ personName + " we'll deliver your order at "+personLocation + ".")
        
        $("#delTotal").text(deliveryCost);
    })

})
};




