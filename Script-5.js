

function Chess(){
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
	//console.log(pawn_1.location);
	let placement_div = document.querySelector('[data-address = ' + fig_obj.location + ']');

	placement_div.appendChild(elem);

	// todo здесь надо пошаманить, чтобы картинки корректно отображались, проверять в OpenServer надо
	let url = fig_obj.background;
	elem.src = url;
	

	// записываем класс фигурки в класс img, чтобы в css размер задать ;)
	elem.className = fig_obj.constructor.name;
	
}

function color_allowed_moves(allowed_moves) {
	for (var c = 0; c < allowed_moves.length; c++) {
		var color_res=document.querySelector("[data-address = "+ allowed_moves[c] +"]")
		var color=document.createElement("div");
		color_res.appendChild(color);
		color.classList.add("allowed_moves");
	}
}

Chess();

//Работает нормально, но все пешки созданны как pawn_1
/*var arr = [" ","A","B","C","D","E","F","G","H"," "]
for (p=0; p <8; p++) {
	pawn_white = new Pawn(arr[p+1]+"2","white")
	pawn_black = new Pawn(arr[p+1]+"7","black")
	place_figure(pawn_white)
	place_figure(pawn_black)
	
}*/
queen=new queen("D5","white");
place_figure(queen)

//var test= queen.get_allowed_moves()
color_allowed_moves(test)

console.log(test)
