function rate (value){
    clearRates();
    addRates(value);
}

function clearRates(){
    for(var i=1;i<=5;i++){
        document.getElementById("star" + i).classList.remove("active");
    }
}

function addRates(value){
    for(var i=1;i<=value;i++){
        document.getElementById("star" + i).classList.add("active");
    }
}

window.addEventListener("click", function(e){
    if(!document.getElementById("rateDiv").contains(e.target)){
        clearRates();
    }
})