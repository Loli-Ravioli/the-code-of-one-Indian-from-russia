// инициализация локатора
let GL = new Locator();

function сhessBoard(){
	var mainBlock = document.querySelector(".main-block");
	var block, className;
	var flag = true;
	var arr = [" ","A","B","C","D","E","F","G","H"," "];
	var arr2 =[" ","8","7","6","5","4","3","2","1"," "]

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			block = document.createElement("div");
			className = "block";
			mainBlock.appendChild(block);

			if (i === 0 || (i > 8 || j > 8) || j === 0) {
				className += " text"
				block.className = className;
				if (i === 0) {
					block.innerText = arr[j];
				} else if (j === 0) {
					flag = !flag;
					block.innerText = arr2[i];
				}
				continue;
			}

			if (flag) className += " black";
			else className += " white";

			block.className = className;
			block.dataset.address=arr[j]+arr2[i];
			flag = !flag;
		}
	}
}

function place_figure(fig_obj) {
	let elem = document.createElement("img");
	console.log(fig_obj)
	let placement_div = document.querySelector('[data-address = ' + fig_obj.location + ']');

	placement_div.appendChild(elem);

	// todo здесь надо пошаманить, чтобы картинки корректно отображались, проверять в OpenServer надо
	let url = fig_obj.background;
	elem.src = url;
	

	// записываем класс фигурки в класс img, чтобы в css размер задать ;)
	elem.className = fig_obj.constructor.name;

	GL.set_object(fig_obj.location, fig_obj);

	elem.addEventListener("click", start_move_figure, false);

}

function color_allowed_moves(allowed_moves) {
	for (var c = 0; c < allowed_moves.length; c++) {
		var color_res=document.querySelector("[data-address = "+ allowed_moves[c] +"]")
		var color=document.createElement("div");
		color_res.appendChild(color);
		color.classList.add("allowed_moves");

		GL.add_colored(allowed_moves[c]);
		color_res.addEventListener("click", finish_move_figure, false);
	}
}

function start_move_figure(event) {
    event.target.removeEventListener('click', start_move_figure, false);
	let el_address = event.target.parentNode.dataset.address;
	let figure = GL.get_object(el_address);
	color_allowed_moves(figure.get_allowed_moves());
	let moves=figure.get_allowed_moves();
	let valid_moves=[];
for (var i = 0; i < moves.length; i++) {
	if (moves[i] in GL.map){
		 valid_moves.push(moves[i]);
	}
}

	if(valid_moves.length==0){
		alert("error")
		return null
	}
}

// Посмотри внимательно как работает эта функция, нужно добавить удаление картинки на старой позиции
function finish_move_figure(event) {
	let target_address = event.target.parentNode.dataset.address;
	let figure = GL.last_object;
	//Удаляет старую картинку фигуры 
	let clear =document.querySelector('[data-address = ' +  figure.location + ']');
	clear.innerHTML="";
	//console.log(clear);

	GL.move_object(figure.location, target_address);
	figure.save_location(target_address);
	for (let i = 0; i < GL.colored.length; i++) {
		let color = document.querySelector('[data-address = ' +  GL.colored[i] + ']');
		let child = color.querySelector('.allowed_moves');
		child.remove();
		color.removeEventListener('click', finish_move_figure, false);
		
	}
		GL.clear_colored();
	place_figure(figure);
}

сhessBoard();
console.log(GL.map)
/*knight= new Knight("D4","white")
place_figure(knight)*/

for (const [key, value] of Object.entries(GL.map)) {
  if(value!==''){
  	place_figure(value)
  }
  
}




