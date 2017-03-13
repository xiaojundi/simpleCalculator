function calculate() {
	document.getElementById("mark1").innerHTML = "";
	document.getElementById("mark2").innerHTML = "";
	document.getElementById("mark3").innerHTML = "";
	document.getElementById("mark4").innerHTML = "";
	var c1 = document.getElementById("cir1").value;
	var c2 = document.getElementById("cir2").value;
	var c3 = document.getElementById("cir3").value;
	var c4 = 1;
	var result = parseInt(document.getElementById("input").value);
	var arr = [];
	arr.push(parseInt(c1));
	arr.push(parseInt(c2));
	arr.push(parseInt(c3));
	arr.push(parseInt(c4));
	var brr = [];
	brr.push(parseInt(c1));
	brr.push(parseInt(c2));
	brr.push(parseInt(c3));
	brr.push(parseInt(c4));
	arr.sort(function(a, b) {
		return b - a;
	})
	console.log(arr);
	console.log(brr);
	var map = {};
	var i = 0;
	console.log(arr)
	while (i <= 3) {
		if (arr[i] != NaN && arr[i] != 0)
			while (Math.floor(result / arr[i]) > 0) {
				map[i] = Math.floor(result / arr[i]);
				result = result % arr[i];
			}
		i++;
	}
	console.log(map)
	for (var i in map) {
		var position = "mark" + (brr.indexOf(arr[i]) + 1);
		//document.getElementById(position).innerHTML = arr[i];
		document.getElementById(position).innerHTML = "<div class='mark' id='mark1'>" + map[i] + "</div>";
	}
}