class HexaGrid {

    #sizeX = 8;
    #sizeY = 11;
    static hexaTexture;
    static hexaTextureOver;
    #container;
    #sprites;

    constructor(sizeX = 8, sizeY = 11, hexaTexture, hexaTextureOver){
        this.#sizeX = sizeX;
        this.#sizeY = sizeY;
        HexaGrid.hexaTexture = hexaTexture;
        HexaGrid.hexaTextureOver = hexaTextureOver;
        let maxSize = sizeX*sizeY - Math.floor(sizeX/2-0.1);
        this.#container = new PIXI.Container(maxSize);

        this.#sprites = new Array(sizeY);

        let h = new PIXI.Sprite(HexaGrid.hexaTexture);
        let xOffset = h.width;
        let yOffset = (3*h.height)/4;

        for(let j=0; j<sizeY; j++) {
            let start = j%2==0 ? 0 : xOffset/2;
            let line = new Array(sizeX);
            for(let i=0; i<sizeX; i++){
                if(start==0 || i+1!=sizeX){
                    let hexa = new PIXI.Sprite(HexaGrid.hexaTexture);
                    hexa.position.set(start + i*xOffset, j*yOffset);
                    hexa.interactive = true;
                    hexa.on('mouseover', this.mouseover);
                    hexa.on('mouseout', this.mouseleave);
                    this.#container.addChild(hexa);
                    line.push(hexa);
                }
            }
            this.#sprites.push(line);
        }
    }

    mouseover(event){
        this.texture = HexaGrid.hexaTextureOver;
    }

    mouseleave(event){
        this.texture = HexaGrid.hexaTexture;
    }

    getContainer() {
        return this.#container;
    }
}