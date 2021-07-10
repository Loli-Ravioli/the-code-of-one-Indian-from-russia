function Chess(){
	var mainBlock = document.querySelector(".main-block");
	var block ;
	var flag= true ;
	var arr= [' ',"A","B","C","D","E","F","G","H"," "];
	var arr2=[" ","8","7","6","5","4","3","2","1"," "]
	var sas =9;
	for (var i = 0; i<10; i++) {
		for (var j = 0; j < 10; j++) {
			if(j==0)flag=!flag;
			block = document.createElement("block");
			if(flag) block.className = "block black";
			else block.className = "block white";
			block.dataset.adress=arr[j]+arr2[i];
			//console.log(block.dataset.adress);
			mainBlock.appendChild(block);
			flag=!flag;
			var allblock = document.querySelectorAll (".block");
			allblock[i].className="block text";
			allblock[i].innerText=arr[i];
		}
	}
	
    for (var n = 10; n <=89; n+=10) {
    	  sas-=1;
			allblock[n].className="block text";
			allblock[n].innerText=sas;
			allblock[n-1].className="block white_border";
		}
		allblock[89].className="block white_border";	
	for (var x = 90; x < 100; x++) {
		allblock[x].className="block white_border";	
		}	
	}

Chess();
var black_cell=document.querySelectorAll(".block black");
var white_cell=document.querySelectorAll(".block white");
console.log(black_cell);
var themeButton = document.querySelector('.theme-button');
themeButton.onclick=function(){
	white_cell.classList.toggle("alt-white")
	black_cell.classList.toggle("alt_black")
}
//пешки-------------------------------------
pawn_1={
	color:"white",
	location:"B2"
}
pawn_2={
	color:"white",
	location:"C2"
}
pawn_3={
	color:"white",
	location:"D2"
}
pawn_4={
	color:"white",
	location:"E2"
}
pawn_5={
	color:"white",
	location:"F2"
}
pawn_6={
	color:"white",
	location:"G2"
}
pawn_7={
	color:"white",
	location:"H2"
}
pawn_8={
	color:"white",
	location:"A2"
}
//фигуры
king={
	color:"white",
	location:"D1"
}
queen={
	color:"white",
	location:"E1"
}
rook_1={
	color:"white",
	location:"A1"
}
rook_2={
	color:"white",
	location:"H1"
}
horse_1={
	color:"white",
	location:"B1"
}
horse_2={
	color:"white",
	location:"G1"
}
slon_1={
	color:"white",
	location:"C1"
}
slon_2={
	color:"white",
	location:"F1"
}