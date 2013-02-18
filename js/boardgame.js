function DrawBoard() {
    for (var row = 0; row < this.board.length; row++){
        for (var col = 0; col < this.board[row].length; col++) {
            var square = this.layout[String(this.board[row][col])];
            var tile = $("<span></span>");
            tile.addClass("tile");
            tile.addClass(square.style);
            tile.attr("data-x", row);
            tile.attr("data-y", col);
            $(".board").append(tile);
        }
    }
}

function DrawPiece(piece, x, y) {
    var spot = $("span[data-x='" + x + "']" + "[data-y='" + y + "']")
    var p = $("<span></span>");
    p.addClass("piece");
    p.addClass(piece);
    spot.append(p);
}

function SetupBoard() {
    for (var row = 0; row < this.setup.length; row++){
        for (var col = 0; col < this.setup[row].length; col++) {
            var square = this.layout[String(this.setup[row][col])];
            if (square.type == "piece") {
                DrawPiece(square.style, row, col);
            }
        }   
    }
}
    
function Message(msg_text) {
    var message = $("<span></span>");
    message.addClass("msg");
    message.text(msg_text); 
    $(".message-box").append(message);
}
game = new Game();
game.DrawBoard = DrawBoard;
game.DrawPiece = DrawPiece;
game.SetupBoard = SetupBoard;


$(function() { 
    game.DrawBoard();
    game.SetupBoard();
    game.turn = "white"
    $(".tile").click(function(turn) {
        var x = $(this).attr("data-x");
        var y = $(this).attr("data-y");
        if (game.ValidateMove(game.turn, x, y)) {
            game.DrawPiece(game.turn, x, y);
        }
        else {
            game.Message("Illegal movement!");
        }
        });

});
