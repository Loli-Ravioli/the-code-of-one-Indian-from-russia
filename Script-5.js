

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
	let placement_div = document.querySelector('[data-address = ' + pawn_1.location + ']');
	//console.log(placement_div);
	placement_div.appendChild(elem);

	// todo здесь надо пошаманить, чтобы картинки корректно отображались, проверять в OpenServer надо
	let url = fig_obj.background;
	elem.src = url;
	console.log(elem.src)

	// записываем класс фигурки в класс img, чтобы в css размер задать ;)
	elem.className = pawn_1.constructor.name;
}


Chess();

//Работает нормально, но все пешки созданны как pawn_1
var arr = [" ","A","B","C","D","E","F","G","H"," "]
for (p=0; p <8; p++) {
	pawn_1 = new Pawn(arr[p+1]+"2","white")
	place_figure(pawn_1)
	console.log(pawn_1.location)
}

