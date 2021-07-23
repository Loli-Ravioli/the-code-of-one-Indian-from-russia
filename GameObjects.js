class Figure {
    team_map = ['black', 'white'];
    coor_x = ["A","B","C","D","E","F","G","H"];
    coor_y =["8","7","6","5","4","3","2","1"];

    constructor(location, team) {
        if (this.team_map.indexOf(team) === -1) return 'ERROR INVALID TEAM PIDOR: only black or white allowed';
        this.team = team;
        this.location = location;
    }

    get_coordinates() {
        let coor_arr = this.location.split('');
        if (coor_arr[0].indexOf(this.coor_x) === -1 || coor_arr[0].indexOf(this.coor_x) === -1) return 'ERROR INVALID LOCATION PIDOR: how did it get here?!';

        return {
            "x": coor_arr[0],
            "y": coor_arr[1]
        }
    }
}

class Pawn extends Figure {
    is_first_move = true;

   background_map = {
        'black': 'e:/js_try/Focking_Chess_board/img/black_pawn.png',
        'white': 'e:/js_try/Focking_Chess_board/img/white_pawn.png'
    };

    constructor(location, team) {
        super(location, team);
        this.background = this.background_map[this.team];
    }

    get_allowed_moves() {
        let coordinates = this.get_coordinates();
        //todo дописать логику, надо чтобы функция возвращала все возможные ходы из текущей позиции которую я любезно записал в coordinates
    }
}