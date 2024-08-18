const nodecontainer = document.querySelector(".NoteContainer");
const btn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");  
// Change const to let for reassignment
function shownote()
{
    nodecontainer.innerHTML = localStorage.getItem("notes")
}
shownote()
function updatestore() {
    localStorage.setItem("notes", nodecontainer.innerHTML);  // Store the HTML in localStorage
}

btn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "./img/delete.png";
    nodecontainer.appendChild(inputbox).appendChild(img);
    updatestore();  // Update storage after adding a new note
});

nodecontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatestore();  // Update storage after deleting a note
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");  // Reassign notes
        notes.forEach(nth => {
            nth.onkeyup = function() {
                updatestore();  // Update storage when a note is modified
            };
        });
    }
});
document.addEventListener("keydown",event=>{
    if(event.key==="Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})