let form = document.getElementById("form-submit");
let table  = document.getElementById("table");
let tableBody = table.children[0];


form.onsubmit = function(){
    event.preventDefault();
    let hours = new Array();
    for(let i = 0; i<51; i++){
        if(form[i].checked === true && form[i].value >10){
         hours.push(parseInt(form[i].value));
        }
    }
    addClass(form[0].value, hours);
    
}





function addClass(name, hours){
    console.log(name);
    console.log(hours);
};
function removeClass(nodeToRemove, dayId, hours){};


