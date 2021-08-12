// Это локатор он работает по типу памяти. В нем должны храниться все объекты, через него все взаимодействия происходят.
class Locator {
    coor_x = ["A","B","C","D","E","F","G","H"];
    coor_y =[8,7,6,5,4,3,2,1];

    // очень полезная штука но ты сам должен понять зачем
    last_object = '';

    map = [];

    colored = [];

    constructor() {
        for (let i = 0; i < this.coor_x.length; i++) {
            for (let j = 0; j < this.coor_y.length; j++) {
                let key = this.coor_x[i] + this.coor_y[j];
                this.map[key] = '';
            }
        }
    }

    set_object(address, object) {
        if (!(address in this.map)) {
            return 'ERROR: INVALID ADDRESS';
        }
        this.last_object = object;
        this.map[address] = object;
    }
 
    get_object(address) {
        if (!(address in this.map))  {
            return 'ERROR: INVALID ADDRESS';
        }
        this.last_object = this.map[address];
        return this.map[address];
    }

    move_object(old_address, new_address) {
        if (!(old_address in this.map) || !(new_address in this.map)) {
            return 'ERROR: INVALID ADDRESS';
        }
        //Не работает как надо, надо исправлять сам масив map,как я понял метод выше set_object записывает фигуры в один элемент массива map/
        this.map[new_address] = this.map[old_address];
        this.map[old_address] = '';
    }

    add_colored(address) {
        if (!(address in this.map)) {
            return 'ERROR: INVALID ADDRESS';
        }
        this.colored.push(address);
    }

    clear_colored() {
        this.colored = [];
    }
}
