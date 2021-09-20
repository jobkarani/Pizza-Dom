// business logic
function Size(type,price){
    this.type=type;
    this.price=price 
}

// user interface logic
$(document).ready(function(){
$("form#pizza").submit(function(e){
    e.preventDefault();

    let selectedType = $("select#type").val();
})

})