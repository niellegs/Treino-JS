var push = document.getElementById("push")

push.onclick = function() {
    var newtask = document.getElementById("newtask").value;
    var tasks = document.getElementById("tasks");
    if(newtask.length == 0) {
        alert("preenche direito");
    } else {
        tasks.innerHTML += 
        `<div class="task">
        <span>${newtask}</span>
        <button>
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>`
    }
}
