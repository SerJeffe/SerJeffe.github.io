function incrementQ(id){
    var data = parseInt(document.getElementById(id).innerHTML);
    data = data + 1;
    document.getElementById(id).innerHTML= data;
    calculateTotalPrice("price"+id,"Add");
}

function decrementQ(id){
    var data = parseInt(document.getElementById(id).innerHTML);
    data = data - 1;
    if(data<0)
        document.getElementById(id).innerHTML= 0;
    else{
        document.getElementById(id).innerHTML= data;
        calculateTotalPrice("price"+id,"Sub");
    }
}

function calculateTotalPrice(priceId,cmd){
    var price = parseInt(document.getElementById(priceId).innerHTML);
    var id = "calcPrice";
    var total = parseInt(document.getElementById(id).innerHTML);
    if(cmd=="Add"){
        document.getElementById(id).innerHTML = (total+price);
    }
    else{
        document.getElementById(id).innerHTML = (total-price);
    }
}

function openOrderPlaced(){
    window.open('orderPlaced.html','_self');
}
