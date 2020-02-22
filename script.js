let form = document.getElementById("form-submit");
let table  = document.getElementById("table");
let tableBody = table.children[0];
let appendList = document.getElementById("append-list");
let deleteList = document.getElementById("delete-list");


form.onsubmit = function(){
    event.preventDefault();
    let hours = new Array();
    for(let i = 0; i<45; i++)
    {
        if(form[i].checked === true)
        {
         hours.push(parseInt(form[i].value));
         form[i].checked = false;
        }
    }
    addClass(form[0].value, hours);
    form[0].value = "";
}





function addClass(name, hours){

    let deleteNode = document.createElement("li");
    
    deleteList.appendChild(deleteNode);
    deleteNode.innerHTML = name;

    deleteNode.onclick =  function(){
        removeClass(deleteNode, hours);
    };
    
    

    hours.forEach(element => {
        let col = parseInt(element/10);
        let row = element%10 +1;

        if(tableBody.children[row].children[col].innerHTML != "")
        {
            alert("Classes are overlapping. Erasing the previous added class in clashing hours " + tableBody.children[row].children[col].innerHTML);
        }
        tableBody.children[row].children[col].innerHTML = name;
    });
    return(deleteNode);
   // console.log(deleteNode.dataset.hours.split(",").map(Number));
};



function removeClass(nodeToRemove, hours){
    hours.forEach(element => {
        let col = parseInt(element/10);
        let row = element%10 +1;
        tableBody.children[row].children[col].innerHTML = "";
    });


    let appendNode = document.createElement("li");
    
    appendList.appendChild(appendNode);
    appendNode.innerHTML = nodeToRemove.innerHTML;

    appendNode.onclick =  function(){
        addClass(nodeToRemove.innerHTML, hours);
        appendList.removeChild(appendNode);
    };
    
    deleteList.removeChild(nodeToRemove);

};




function seeder(){
    removeClass(addClass("FIZ 117 (25-26) <br> LS1, LS2", [10,11,12]),[10,11,12]);
    removeClass(addClass("ING 112(27, 32, 36) <br> D4", [14,15,16]),[14,15,16]);
    removeClass(addClass("MAT254(02) <br> D9", [10,11,12]),[10,11,12]);
    removeClass(addClass("MAT254(01) <br> D1", [55,56,57]),[55,56,57]);
    removeClass(addClass("BBM234(01,02) <br> D1, D2", [14,15,16]),[14,15,16]);
    removeClass(addClass("MAT124(01,10,14) <br> D1, D2, D3", [21,22,41,42,50,51]),[21,22,41,42,50,51]);
    removeClass(addClass("BBM384(01-02) <br> D8, D9", [14,15]),[14,15]);
    removeClass(addClass("BBM 428 <br> M9", [16,17]),[16,17]);
    removeClass(addClass("BBM497 <br>(D10)", [14,15]),[14,15]);
    removeClass(addClass("FIZ138(25-26) <br> D1, D2", [24,25,44,45]),[24,25,44,45]);
    removeClass(addClass("AIT204(70) <br> D4", [22,23]),[22,23]);
    removeClass(addClass("BBM202(01-02-03) <br> D3,D4,D8", [24,25,26]),[24,25,26]);
    removeClass(addClass("BBM342(01-02) <br> D8, D9", [20,21,22]),[20,21,22]);
    removeClass(addClass("BBM471 <br> (D10) ", [20,21,22]),[20,21,22]);
    removeClass(addClass("BBM432 <br> D9", [24,25,26]),[24,25,26]);
    removeClass(addClass("BBM102(01,02,03) <br> D1, D2, D3", [34,35,36]),[34,35,36]);
    removeClass(addClass("ELE296 <br> M13", [30,31,32,33]),[30,31,32,33]);
    removeClass(addClass("BM467 <br> (D8)", [30,31,32]),[30,31,32]);
    removeClass(addClass("BM416 <br> (D9)", [30,31,32]),[30,31,32]);
    removeClass(addClass("BBM410 <br> (D8)", [34,35,36]),[34,35,36]);
    removeClass(addClass("BBM442 <br> (D9)", [34,35,36]),[34,35,36]);
    removeClass(addClass("BBM204(01) <br> Comp. Lab", [40,41]),[40,41]);
    removeClass(addClass("BBM204(02) <br> Comp. Lab", [42,43]),[42,43]);
    removeClass(addClass("BBM204(03) <br> Comp. Lab", [44,45]),[44,45]);
    removeClass(addClass("BM382(01-02) <br> D8, D9", [40,41,42]),[40,41,42]);
    removeClass(addClass("BBM495 <br> (D10)", [40,41,42]),[40,41,42]);
    removeClass(addClass("BBM473 <br> (D8)", [44,45]),[44,45]);
    removeClass(addClass("BBM434 <br> (DSL)", [46,47]),[46,47]);
    removeClass(addClass("BBM104(01) <br> Comp. Lab.", [52,53]),[52,53]);
    removeClass(addClass("BBM104(02) <br> Comp. Lab.", [54,55]),[54,55]);
    removeClass(addClass("BBM104(03) <br> Comp. Lab.", [56,57]),[56,57]);
    removeClass(addClass("İST292(05-06) <br> D3, D4", [50,51,52]),[50,51,52]);
    removeClass(addClass("BBM405 <br> (D8)", [50,51,52]),[50,51,52]);
    removeClass(addClass("BBM456 <br> (D9)", [50,51,52]),[50,51,52]);
    removeClass(addClass("BBM469 <br> (D8) ", [55,56]),[55,56]);
    removeClass(addClass("BBM418 <br> (D9) ", [55,56]),[55,56]);
    removeClass(addClass("MÜH104 <br> (BLACKBOARD) ", [47]),[47]);


};

seeder();