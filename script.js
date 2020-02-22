let form = document.getElementById("form-submit");
let table  = document.getElementById("table");
let tableBody = table.children[0];


form.onsubmit = function(){
    console.log(form);
    event.preventDefault();
    let hours = new Array();
    for(let i = 0; i<45; i++)
    {
        if(form[i].checked === true)
        {
         hours.push(parseInt(form[i].value));
        }
    }
    addClass(form[0].value, hours);
    
}





function addClass(name, hours){
    hours.forEach(element => {
        let col = parseInt(element/10);
        let row = element%10 +1
        tableBody.children[row].children[col].innerHTML = name;
    });
};



function removeClass(nodeToRemove, dayId, hours){};


