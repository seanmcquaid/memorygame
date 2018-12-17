// add ready listener to the whole dom

$(document).ready(()=>{
    // will target the thing clicked on bc of this
    $("button").click(function(){
        console.log($(this));
        // attr method will get the value of that attribute
        let gridSize = $(this).attr("diff");
        console.log(gridSize);
        let cards = [];
        // our monsters start at 1 so start i at 1
        // every time through the loop, we push 2 monsters on because this is a matching game, we need 2 
        // so we loop half of the grid size (gridsize/ 2) but we need to add one because we started at 1 not 0
        // or we need to end at <= 
        for (let i = 1; i <= (gridSize/2); i++){
            let monsterNumber = i;
            if(i<10){
                monsterNumber = "0" + i;
            }
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`);
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`);
        }
        // console.log(cards);
        let memoryHTML = "";
        // init a var to store our html inside of and loop through all of the cards
        cards.forEach((card)=>{
            memoryHTML += `
            <div class="card col-sm-3">
                <div class="card-holder">
                    <div class="card-front">${card}</div>
                    <div class="card-back"></div>
                </div>
            </div>
            `
        })
        console.log(memoryHTML);
        $(".memory-game").html(memoryHTML);
        $(".card-holder").click(function(){
            $(this).addClass("flip");
        })
    })
})