var character = document.getElementById("character");
var enemy = document.getElementById("enemy");


document.addEventListener( 
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id === "jump"){
            if(character.classList != "animate"){
            character.classList.add("animate");
            }
            setTimeout(function(){
                character.classList.remove('animate')
            },500)
            
        }
    }
)