function Game() {
    this.layout = {
        "0" : {  "type" : "tile", "style" : 'white' },
        "1" : {  "type" : "tile", "style" : 'black' },
        "X" : {  "type" : "piece", "style" : 'black' },
        "Y" : {  "type" : "piece", "style" : 'white' }
    }
    
    var X = "X";
    var Y = "Y";
    this.board = [[0,1,0,1,0,1,0,1],
                  [1,0,1,0,1,0,1,0],  
                  [0,1,0,1,0,1,0,1],
                  [1,0,1,0,1,0,1,0],
                  [0,1,0,1,0,1,0,1],
                  [1,0,1,0,1,0,1,0],
                  [0,1,0,1,0,1,0,1],
                  [1,0,1,0,1,0,1,0]];
                  
    
    this.setup = [[0,X,0,X,0,X,0,X],
                  [X,0,X,0,X,0,X,0],  
                  [0,1,0,1,0,1,0,1],
                  [1,0,1,0,1,0,1,0],
                  [0,1,0,1,0,1,0,1],
                  [1,0,1,0,1,0,1,0],
                  [Y,1,Y,1,Y,1,Y,1],
                  [1,Y,1,Y,1,Y,1,Y]];
    
    this.ValidateMove = function(piece, x, y) {
        return true;
    }
}
