var counter = 0;
var x = document.getElementsByClassName("mc-ls");
var list = x[0].getElementsByTagName('table');
list = list[0].getElementsByTagName('td');
console.log(list);
if(list.length > 18 && counter === 0){
	var dod = 0;
	if(list.length === 45){
		dod = 2;
	}
	var def = Number(list[19+dod].innerText);
	var freeThrow= Number(list[22+dod].innerText);
	var points2 = Number(list[24+dod].innerText);
	var points3 = Number(list[27+dod].innerText);
	var dribling = Number(list[29+dod].innerText);
	var pass = Number(list[32+dod].innerText);
	var speed = Number(list[34+dod].innerText);
	var footwork = Number(list[37+dod].innerText);
	var rebound = Number(list[39+dod].innerText);
	var experience = Number(list[42+dod].innerText);
				
	var pg_sg = def+ dribling+ pass+ speed;
	var sf = def+ dribling+ footwork+ speed;
	var pf_c = def+ rebound+ footwork+ speed;
	theKid = document.createElement("div");
	theKid.style.textAlign = "center";
	theKid.innerHTML = "<br/><b>Guard sum:</b> " + pg_sg +"  <b>Forward sum:</b> " + sf +"  <b>Center sum:</b> " + pf_c;
	x[0].insertBefore(theKid, x[0].firstChild);
	counter++;
}