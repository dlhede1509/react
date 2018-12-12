       const  arrays = [1, 2, 3, 20, 5, 100, 10, 4]

const div = (arr) => {
	let i = arr[0];

	   for (const [i, array] of arrays.entries() ) {
		if (arr[i] % 10 === 0) {
			return i;
		} else ++i 
	 };
	div(arr);
	console.log(div(arr));
