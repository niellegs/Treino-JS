var push = document.getElementById("push")

push.onclick = function() {
    var newtask = document.getElementById("newtask").value;
    var tasks = document.getElementById("tasks");
    if(newtask.length == 0) {
        alert("preenche direito");
    } else {
        tasks.innerHTML += 
        `<div class="task">
        <span id="taskname">${newtask}</span>
        <button class="delete">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>`;

    var del = document.querySelectorAll(".delete")
    for(i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            this.parentNode.remove();
           }
        }
    }
    var done = document.querySelectorAll(".task");
    
    for(i = 0; i < done.length; i++) {
        done[i].onclick = function() {
            this.classList.toggle("done");
        }
    }

    newtask.value = "";
}

function generate() {
    var container = document.getElementById("quote-container")
    var frases = [
        "Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo?",
        "Imagine uma nova história para sua vida e acredite nela.",
        "Tudo vale a pena quando a alma não é pequena.",
        "Nenhum mar calmo torna um marinheiro especialista em navegação.",
        "Choramos ao nascer porque chegamos a este imenso cenário de dementes.",
        "É mais fácil obter o que se deseja com um sorriso do que à ponta da espada.",
        "O diabo pode citar as Escrituras quando isso lhe convém.",
        "Não julgueis; somos todos pecadores."
        
    ]
    var i = Math.floor(Math.random() * frases.length)
    
    container.innerHTML = frases[i]
}