var isContent1 = true;
var maDiv = document.getElementById("maDiv");
var bouton1 = document.getElementById("bouton1");
var bouton2 = document.getElementById("bouton2");
var titrePage = document.getElementById("titrePage");


// Ajoute un écouteur d'événement "click" au bouton
    bouton1.addEventListener("click", function(){
    
        if(isContent1){
          return;
    }
        isContent1 = true;
        // Change le contenu de la div
        maDiv.innerHTML = "<h2>Louis</h2><p>Mon prénom est Louis, et ceci est un test pour changer la page en Javascript, sans recharger la page. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
        // Change le titre de la page
        titrePage.innerHTML = "Titre de la page - Contenu 1";
});
  
// Ajoute un écouteur d'événement "click" au bouton
      bouton2.addEventListener("click", function(){
     
        if(!isContent1){
          return;
    
    }
        isContent1 = false;
        // Change le contenu de la div
        maDiv.innerHTML = "<h2>Durut</h2><p>Durut est mon nom, et apparement mon expérience marche... Enfin je pense ! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
        // Change le titre de la page
        titrePage.innerHTML = "Titre de la page - Contenu 2";
});

function changeTitle(newTitle) {
    document.title = newTitle;
};

  