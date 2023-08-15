document.querySelector('#push').onclick = function () {

    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML +=`
        <div class="task">
            <span  id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
        `;
        
        var current_tasks = document.querySelectorAll(".delete");
        // Se o i for menor que o index, i++
        for(var i=0; i<current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                // Seleciona o pai de determinado elemento (button)
                this.parentNode.remove() ;
            }
        }
    }

    var tasks = document.querySelectorAll('.task');

    for(var i=0; i<tasks.length; i++) {
            tasks[i].onclick = function() {
                // classlist.toggle: adiciona uma classe.
                this.classList.toggle('completed');
            }
    }

    document.querySelector("#newtask input").value = "";
}

