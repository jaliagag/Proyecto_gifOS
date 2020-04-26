// CAMBIAR DE CSS
// FALTA ACTUALIZAR EL ONCLICK DE LOS ELEMENTOS EN EL HTML

let fboton = () => {
    
    var elim = document.getElementById("estilardo");
    elim.remove();

    var head = document.getElementsByTagName("HEAD")[0];
  
    var link = document.createElement("link");
  
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "styles/light_theme.css";
    link.id = "estilardo";
  
    head.appendChild(link);
    
}
  
let sboton = () => {
    
    var elim = document.getElementById("estilardo");
    elim.remove();
    
    var head = document.getElementsByTagName("HEAD")[0];
  
    var link = document.createElement("link");
  
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "styles/dark_theme.css";
    link.id = "estilardo";
  
    head.appendChild(link);
}

// CAMBIAR DE CSS

// TOGGLE BARRA DE TEMAS

function mostrar() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  /*
window.onclick = function(event) {
      //if (!event.target.matches('.dropbtn')) {
    if (!event.target.matches('#dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}*/