const res = [
    "/assets/sprites/arena1.bmp",
    "/assets/sprites/arena2.png",
    "/assets/sprites/hexa.png",
    "/assets/sprites/hexa_over.png"
];

function loadRes(ready){
    PIXI.loader.add(res)
    .on("progress", function(loader, resource){
        console.log("Loading " + resource.url);
    }).load(function(){
        console.log('Ready !');
        ready();
    });
}