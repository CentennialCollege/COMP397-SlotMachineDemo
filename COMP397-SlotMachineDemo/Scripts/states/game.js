var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
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
        };
        Game.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        Game.prototype._clickBet1Button = function (event) {
            console.log("bet 1");
        };
        //WORKHORSE OF THE GAME
        Game.prototype._spinButtonClick = function (event) {
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map