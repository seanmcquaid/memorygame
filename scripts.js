// add ready listener to the whole dom

$(document).ready(()=>{
    console.log("sanity check")

    // will console the thing clicked on bc of this
    $("button").click(function(){
        console.log($(this));
        // attr method will get the value of that attribute
        let gridSize = $(this).attr("diff");
        console.log(gridSize);
    })
})