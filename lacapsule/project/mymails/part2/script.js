var messageCount = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = messageCount;

for (var i=0; i < document.getElementsByClassName('trash').length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click", 
    function() {
        console.log("clic détecté")
        this.parentNode.remove();
        var messageCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messageCount;
    }
    );
};

// Récupération des infos avec le bouton :
document.getElementById("btn-add").addEventListener("click",
    function() {
        console.log(document.getElementById("add-message").value);
        // Créer un nouveau message qui sera automatiquement placé en dernier :
        var mainDiv = document.createElement("div");
        mainDiv.className = "row";
        document.body.appendChild(mainDiv); // Insérer notre enfant mainDiv dans le body

        var image = document.createElement("img");
        image.className = "avatar";
        image.src = "avatar-1.jpg";
        mainDiv.appendChild(image); // insérer notre enfant image dans mainDiv

        // Créer une nouvelle div pour h6 et p :
        var nameMessageDiv = document.createElement("div"); 
        mainDiv.appendChild(nameMessageDiv);
        
        var h6 = document.createElement("h6");
        h6.textContent = "Eric Dupont";
        nameMessageDiv.appendChild(h6);

        var content = document.createElement("p");
        content.textContent = document.getElementById("add-message").value; // récupère la valeur du textField
        nameMessageDiv.appendChild(content);

        var trash = document.createElement("img");
        trash.className = "trash";
        trash.src = "trash.png";
        mainDiv.appendChild(trash);

        // Remettre le textField vide :
        document.getElementById("add-message").value = "";

        // Recompter le nombre de message :
        var messageCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messageCount;

        // Action sur le click de la poubelle :
        trash.addEventListener("click",
        function() {
            this.parentElement.remove()
            var messageCount = document.getElementsByTagName('p').length;
            document.getElementById('count').textContent = messageCount;
        }
        )
    }
)