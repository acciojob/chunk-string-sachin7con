function stringChop(str, size) {
  //SGN your code here
	let arr = [];
	if(str.length >1){
		if(size>str.length){
			arr.push(str);
		}else {
			let indx = -1;
			for (let i = 0; i < str.length; i = i+size) {
				arr.push(str.substring(i, i+size));
				indx = i;
			} arr.push(str.substring(indx, str.length));
		}
		
	}return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
