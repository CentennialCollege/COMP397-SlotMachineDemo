module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _slotMachine: createjs.Container;
        private _background: createjs.Bitmap;
        private _bet1Button: objects.SpriteButton;
        private _bet10Button: objects.SpriteButton;
        private _bet100Button: objects.SpriteButton;
        private _betMaxButton: objects.SpriteButton;
        private _spinButton: objects.SpriteButton;

        private _tile1: objects.GameObject;
        private _tile2: objects.GameObject;
        private _tile3: objects.GameObject;

        private _betLine: objects.GameObject;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            this._slotMachine = new createjs.Container();
            this._slotMachine.x = 132.5;

            this._background = new createjs.Bitmap(assets.getResult("background"));
            this._slotMachine.addChild(this._background); // add background image

            this._bet1Button = new objects.SpriteButton("bet1Button", 23, 386);
            this._slotMachine.addChild(this._bet1Button);

            this._bet10Button = new objects.SpriteButton("bet10Button", 88, 386);
            this._slotMachine.addChild(this._bet10Button);

            this._bet100Button = new objects.SpriteButton("bet100Button", 153, 386);
            this._slotMachine.addChild(this._bet100Button);

            this._betMaxButton = new objects.SpriteButton("betMaxButton", 218, 386);
            this._slotMachine.addChild(this._betMaxButton);

            this._spinButton = new objects.SpriteButton("spinButton", 289, 386);
            this._slotMachine.addChild(this._spinButton);

            this._tile1 = new objects.GameObject("blank", 74, 192);
            this._slotMachine.addChild(this._tile1);

            this._tile2 = new objects.GameObject("blank", 152, 192);
            this._slotMachine.addChild(this._tile2);

            this._tile3 = new objects.GameObject("blank", 230, 192);
            this._slotMachine.addChild(this._tile3);

            this._betLine = new objects.GameObject("bet_line", 61, 225);
            this._slotMachine.addChild(this._betLine);

            this.addChild(this._slotMachine);
            stage.addChild(this);

            // add event listeners
            this._bet1Button.on("click", this._clickBet1Button, this);

            this._spinButton.on("click", this._spinButtonClick, this);
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        private _clickBet1Button(event: createjs.MouseEvent): void {
            console.log("bet 1");
        }

        //WORKHORSE OF THE GAME
        private _spinButtonClick(event: createjs.MouseEvent): void {
        }


    }


} 