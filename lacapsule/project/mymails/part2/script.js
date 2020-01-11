function messageCount() {
    // Nombre de paragraphes.
    var messageCount = $("p").length;
    console.log(messageCount);
    // Assigne le nombre au compteur :
    $('#count').text(messageCount) 
}

messageCount()

// Supprimer la fiche avec la poubelle :
// Mettre une écoute sur chacun des éléments parents de la trash 
// => Dans le body il-y dès que je vois un élément de classe trash, je le met sur écoute 
$("body").on("click", '.trash', function() {
        this.parentNode.remove();
        messageCount();
    });


$("#btn-add").click(
    function() {
        var messageValue = $('#add-message').val()
        // N.B : Le backquote ` permet de gérer du contenu sur plusieurs lignes.
        $("body").append(`
                            <div class="row">
                                <img class="avatar src="./assets/avatar-2.jpg">
                                <div>
                                    <h6>Eric Dupont</h6>
                                    <p>` + messageValue + `</p>
                                </div>
                                <img class="trash" src="./assets/trash.png">
                            </div>`        
        );

        $('#count').text($('p').length);       
        // Remettre le textField vide :s
        $('#add-message').val("");    
});

// clic sur le bouton de recherche :
$('#btn-search').click(function(){
    $('h6').each(function(){
           if($("#search-message").val() != $(this).text()){  
             $(this).parent().parent().fadeOut();
          } else {
             $(this).parent().parent().show();
          }
        });
            $('#search-message').val("")
    });









// ANNCIENNE ÉCRITURE AVEC JAVASCRIPT :

// var messageCount = document.getElementsByTagName('p').length;
// document.getElementById('count').textContent = messageCount;
 
// for (var i=0; i < document.getElementsByClassName('trash').length; i++) {
//     document.getElementsByClassName('trash')[i].addEventListener("click", 
//     function() {
//         console.log("clic détecté")
//         this.parentNode.remove();
//         var messageCount = document.getElementsByTagName('p').length;
//         document.getElementById('count').textContent = messageCount;
//     }
//     );
// };



// // Récupération des infos avec le bouton :
// document.getElementById("btn-add").addEventListener("click",
//     function() {
//         console.log(document.getElementById("add-message").value);
//         // Créer un nouveau message qui sera automatiquement placé en dernier :
//         var mainDiv = document.createElement("div");
//         mainDiv.className = "row";
//         document.body.appendChild(mainDiv); // Insérer notre enfant mainDiv dans le body

//         var image = document.createElement("img");
//         image.className = "avatar";
//         image.src = "./assets/avatar-1.jpg";
//         mainDiv.appendChild(image); // insérer notre enfant image dans mainDiv

//         // Créer une nouvelle div pour h6 et p :
//         var nameMessageDiv = document.createElement("div"); 
//         mainDiv.appendChild(nameMessageDiv);
        
//         var h6 = document.createElement("h6");
//         h6.textContent = "Eric Dupont";
//         nameMessageDiv.appendChild(h6);

//         var content = document.createElement("p");
//         content.textContent = document.getElementById("add-message").value; // récupère la valeur du textField
//         nameMessageDiv.appendChild(content);

//         var trash = document.createElement("img");
//         trash.className = "trash";
//         trash.src = "./assets/trash.png";
//         mainDiv.appendChild(trash);

//         // Remettre le textField vide :
//         document.getElementById("add-message").value = "";

//         // Recompter le nombre de message :
//         var messageCount = document.getElementsByTagName('p').length;
//         document.getElementById('count').textContent = messageCount;

//         // Action sur le click de la poubelle :
//         trash.addEventListener("click",
//         function() {
//             this.parentElement.remove()
//             var messageCount = document.getElementsByTagName('p').length;
//             document.getElementById('count').textContent = messageCount;
//         }
//         );

//     }
// )