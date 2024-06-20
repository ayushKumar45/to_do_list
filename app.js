const input1=document.getElementById("input_")
const todolist=document.getElementById("to_do_list")

input1.addEventListener(
    "keyup",
    function(e)
    {
        if(e.key=="Enter")
            {
                addtodo(this.value)
                this.value=""
            }
    }
)
const addtodo=(input1)=>{
const listitem=document.createElement("li");
listitem.innerHTML=`${input1}
  <i class="fas fa-times"></i>`;

listitem.addEventListener(
    "click",
    function ()
    {
        this.classList.toggle("mylist");
    }
)
listitem.querySelector("i").addEventListener(
    "click",
    function()
    {
        listitem.remove();
    }
)
todolist.appendChild(listitem);
}