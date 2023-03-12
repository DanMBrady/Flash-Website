document.addEventListener( 
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id === "game"){
            window.location.href="game.html"
        }
    }
)