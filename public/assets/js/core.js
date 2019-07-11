let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas";
}

PIXI.utils.sayHello(type);

const app = new PIXI.Application();

//create Tink for mouse input
/*var t = new Tink(PIXI, app.renderer.view);
var pointer = t.makePointer();*/

// Create app with the size of the screen
document.body.appendChild(app.view);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

var arena1;


loadRes(function(){    
    var grid = new HexaGrid(8,11,PIXI.loader.resources["/assets/sprites/hexa.png"].texture,PIXI.loader.resources["/assets/sprites/hexa_over.png"].texture); 
    arena1 = new PIXI.Sprite(PIXI.loader.resources["/assets/sprites/arena2.png"].texture);

    //reduce the size to enter in the height of the screen
    let scale = window.innerHeight/arena1.height;
    arena1.scale.set(scale,scale);
    let hexa = grid.getContainer();
    hexa.x = arena1.x = window.innerWidth/2 - arena1.width/2;
    //hexa_over.x = hexa.x + hexa.width;

    app.stage.addChild(arena1);
    app.stage.addChild(hexa);
    //app.stage.addChild(hexa_over);

    //call gameLoop 60times/sec
    app.ticker.add(delta => gameLoop(delta));
});

function gameLoop(delta){
    //update tink
    /*t.update();
    if(pointer.hitTestSprite(hexa)) {
        hexa.texture = PIXI.loader.resources["/assets/sprites/hexa_over.png"].texture;
    } else
        hexa.texture = PIXI.loader.resources["/assets/sprites/hexa.png"].texture;*/
}