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

    let deleteList = document.getElementById("delete-list");
    let deleteNode = document.createElement("li");
    
    deleteList.appendChild(deleteNode);
    deleteNode.innerHTML = name;

    deleteNode.onclick =  function(){
        removeClass(deleteList, deleteNode, hours);
    };
    
    

    hours.forEach(element => {
        let col = parseInt(element/10);
        let row = element%10 +1;
        tableBody.children[row].children[col].innerHTML = name;
    });
   // console.log(deleteNode.dataset.hours.split(",").map(Number));
};



function removeClass(deleteList, nodeToRemove, hours){
    hours.forEach(element => {
        let col = parseInt(element/10);
        let row = element%10 +1;
        tableBody.children[row].children[col].innerHTML = "";
    });


    let appendList = document.getElementById("append-list");
    let appendNode = document.createElement("li");
    
    appendList.appendChild(appendNode);
    appendNode.innerHTML = nodeToRemove.innerHTML;

    appendNode.onclick =  function(){
        addClass(nodeToRemove.innerHTML, hours);
        appendList.removeChild(appendNode);
    };
    
    deleteList.removeChild(nodeToRemove);

};


