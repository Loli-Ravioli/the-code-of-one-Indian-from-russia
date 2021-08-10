class Figure {
    team_map = ['black', 'white'];
    coor_x = ["A","B","C","D","E","F","G","H"];
    coor_y =[8,7,6,5,4,3,2,1];

    constructor(location, team) {
        if (this.team_map.indexOf(team) === -1) return 'ERROR INVALID TEAM PIDOR: only black or white allowed';
        this.team = team;
        this.location = location;
    }

    get_coordinates() {
        let coor_arr = this.location.split('');
        if (this.coor_x.indexOf(coor_arr[0]) === -1 || coor_arr.indexOf(coor_arr[1]) === -1) return 'ERROR INVALID LOCATION PIDOR: how did it get here?!';

        return {
            "x": coor_arr[0],
            "y": +coor_arr[1]
        }
    }

    save_location(location) {
        this.location = location;
    }
}

class Pawn extends Figure {
    is_first_move = false;

   background_map = {
        'black': 'img/black_pawn.png',
        'white': 'img/white_pawn.png'
    };

    constructor(location, team) {
        super(location, team);
        this.background = this.background_map[this.team];
    }

    get_allowed_moves() {
        let coordinates = this.get_coordinates();
        let allowed_moves=[];
        let x=coordinates.x;
        let y=coordinates.y;
        if(this.is_first_move){
            y+=2;
            allowed_moves.push(x+y)
            y=coordinates.y+1
            allowed_moves.push(x+y)
            this.is_first_move=false;
           return allowed_moves;
        } else {
            y+=1
            allowed_moves.push(x+y)
            
            let index_x=this.coor_x.indexOf(x)
            if(x=this.coor_x[index_x+1])            
            allowed_moves.push(x+y);
            
            if(x=this.coor_x[index_x-1])               
            allowed_moves.push(x+y);
            return allowed_moves;
        }
      
    }
}
class Bishop extends Figure {
   background_map = {
        'black': 'img/black_bishop.png',
        'white': 'img/white_bishop.png'
    };
    constructor(location, team) {
        super(location, team);
        this.background = this.background_map[this.team];
    }

    get_allowed_moves() {
        let coordinates = this.get_coordinates();
        let allowed_moves=[];
        let x=coordinates.x;
        let y=coordinates.y;
        let index_x=this.coor_x.indexOf(x);
        let index_y=this.coor_y.indexOf(y);
        for (var i=1;i<10;i++) {
            if((x=this.coor_x[index_x+i])&&(y=this.coor_y[index_y+i]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x-i])&&(y=this.coor_y[index_y-i]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x+i])&&(y=this.coor_y[index_y-i]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x-i])&&(y=this.coor_y[index_y+i]))  
             allowed_moves.push(x+y);
         }
         return allowed_moves;
      
    }
}
class Rook extends Figure {
   background_map = {
        'black': 'img/black_rook.png',
        'white': 'img/white_rook.png'
    };
    constructor(location, team) {
        super(location, team);
        this.background = this.background_map[this.team];
    }

    get_allowed_moves() {
        let coordinates = this.get_coordinates();
        let allowed_moves=[];
        let x=coordinates.x;
        let y=coordinates.y;
        let index_x=this.coor_x.indexOf(x);
        let index_y=this.coor_y.indexOf(y);
         for (var i=1;i<10;i++) {
            if(x=this.coor_x[index_x+i])  
             allowed_moves.push(x+y);
            if(x=this.coor_x[index_x-i])  
             allowed_moves.push(x+y);
            }
             x=coordinates.x;
        for (var z = 1;z<10;z++) {
              if(y=this.coor_y[index_y-z])  
             allowed_moves.push(x+y);
            if(y=this.coor_y[index_y+z]) 
             allowed_moves.push(x+y);
             }     
        return allowed_moves;
    }
}
class Queen extends Figure {
   background_map = {
        'black': 'img/black_queen.png',
        'white': 'img/white_queen.png'
    };
    constructor(location, team) {
        super(location, team);
        this.background = this.background_map[this.team];
    }

    get_allowed_moves() {
        let coordinates = this.get_coordinates();
        let allowed_moves=[];
        let x=coordinates.x;
        let y=coordinates.y;
        let index_x=this.coor_x.indexOf(x);
        let index_y=this.coor_y.indexOf(y);
        for (var i=1;i<10;i++) {
            if((x=this.coor_x[index_x+i])&&(y=this.coor_y[index_y+i]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x-i])&&(y=this.coor_y[index_y-i]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x+i])&&(y=this.coor_y[index_y-i]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x-i])&&(y=this.coor_y[index_y+i]))  
             allowed_moves.push(x+y);
         }
         x=coordinates.x;
         y=coordinates.y;
        for (var o=1;o<10;o++) {
            if(x=this.coor_x[index_x+o])  
             allowed_moves.push(x+y);
            if(x=this.coor_x[index_x-o])  
             allowed_moves.push(x+y);
            }
             x=coordinates.x;
             y=coordinates.y;
        for (var z = 1;z<10;z++) {
              if(y=this.coor_y[index_y-z])  
             allowed_moves.push(x+y);
            if(y=this.coor_y[index_y+z]) 
             allowed_moves.push(x+y);
             }     
        return allowed_moves;
    }
}//Дописать короля, и придумать чонить тк get_allowed_moves возврашает массив всех клеток ок без учета есть ли там фигура или нет.В целом как это все будет ходит, основной кусок логики этих ебучих шахмат.
class King extends Figure {
   background_map = {
        'black':'img/black_king.png',
        'white':'img/white_king.png'
    };
    constructor(location, team) {
        super(location, team);
        this.background = this.background_map[this.team];
    }

    get_allowed_moves() {
        let coordinates = this.get_coordinates();
        let allowed_moves=[];
        let x=coordinates.x;
        let y=coordinates.y;
        let index_x=this.coor_x.indexOf(x);
        let index_y=this.coor_y.indexOf(y);
       
            if((x=this.coor_x[index_x+1])&&(y=this.coor_y[index_y+1]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x-1])&&(y=this.coor_y[index_y-1]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x+1])&&(y=this.coor_y[index_y-1]))  
             allowed_moves.push(x+y);
            if((x=this.coor_x[index_x-1])&&(y=this.coor_y[index_y+1]))  
             allowed_moves.push(x+y);
         
         x=coordinates.x;
         y=coordinates.y;
        
            if(x=this.coor_x[index_x+1])  
             allowed_moves.push(x+y);
            if(x=this.coor_x[index_x-1])  
             allowed_moves.push(x+y);
            
             x=coordinates.x;
             y=coordinates.y;
       
              if(y=this.coor_y[index_y-1])  
             allowed_moves.push(x+y);
            if(y=this.coor_y[index_y+1]) 
             allowed_moves.push(x+y);
                  
        return allowed_moves;
        }
      }