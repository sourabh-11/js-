let inputbox = document.getElementById("input-box")
let listConatiner = document.getElementById("list-Container")

function addtask()
{
    if(inputbox.values===' ')
    {
        alert("please must write somthing");
    }
    else{
        let li  = document.createElement("li");
        li.innerHTML = inputbox.values;
        listConatiner.appendChild(li);
        // li.setAttribute("class","checked")
    }

}
