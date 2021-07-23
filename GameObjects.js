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
            if (x=this.coor_x[index_x+1])              
            allowed_moves.push(x+y);
            
            if(x=this.coor_x[index_x-1])               
            allowed_moves.push(x+y);
            return allowed_moves;
        }
        
        //todo дописать логику, надо чтобы функция возвращала все возможные ходы из текущей позиции которую я любезно записал в coordinates
    }
}