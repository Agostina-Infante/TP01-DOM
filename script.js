const parrafo = document.getElementById("titulo").textContent='Título';
var parrafos = document.getElementsByClassName("parrafo");
for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "purple";
}
const caja = document.querySelector("#contenedor").style.backgroundColor = '#800020';

//Boton

const clic=document.getElementById("boton");
clic.addEventListener("click", () => {
    alert("¡Clic detectado!");
    clic.innerText = '¡Gracias!';
});

//Agregar tarea

const inputTextTarea=document.getElementById("tarea");
const AgregarTareaBtn=document.getElementById("boton2");
const EventoTarea=document.getElementById("listaTareas");

AgregarTareaBtn.addEventListener('click', () =>{
    const valor=inputTextTarea.value;
    if(valor.trim() !==""){
        const nuevaTarea=document.createElement("li");
        nuevaTarea.innerText=valor;
        const EliminarTarea=document.createElement("button");
        EliminarTarea.textContent="Borrar";
        EliminarTarea.onclick=function(){
            nuevaTarea.parentNode.removeChild(nuevaTarea); //punto 4
        }
        nuevaTarea.appendChild(EliminarTarea);
        EventoTarea.appendChild(nuevaTarea);
        inputTextTarea.value="";
    }else{
        alert("Anotá alguna tarea");
    }
});

//Formulario

const inputContraseña = document.querySelector("#Contraseña").style.borderColor = '#800020';

//Comentarios

const inputComentario = document.querySelector("#CampoTexto");
const PublicarBtn = document.querySelector("#boton3");
const espacioComentario = document.querySelector("#ComentarioEspacio");

PublicarBtn.addEventListener('click', ()=>{
    const Comnt = inputComentario.value;
    if (Comnt.trim()!==""){
        const Comentario=document.createElement("p");
        Comentario.innerText=Comnt;
        const EliminarComnt=document.createElement("button");
        EliminarComnt.textContent="Borrar";
        EliminarComnt.onclick=function(){
            Comentario.remove();
        }
        Comentario.appendChild(EliminarComnt);
        espacioComentario.appendChild(Comentario);
        inputComentario.value="";
    }else{
        alert("Escribí algo antes de comentar!!");
    }
});