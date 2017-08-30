var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var doubles = arr.map(function(x){
			return x * x;
		})
		return doubles;
	},

	sum: function (arr) {
		var total = arr.reduce(function(sum, value){
			return sum + value;
		})
		return total;
	},

// Got really stuck here.
	// findDuplicates: function (arr) {
		
	// },

	removeAndClone: function (arr, valueToRemove) {
		newArray = [];
		for (item of arr){
			if (item !== valueToRemove){
				newArray.push(item);
			}
		}
		return newArray;
	},

// I can populate the new array with the actual number in question, but not it's index position.
	findIndexesOf: function (arr, itemToFind) {
		var indexPositions = arr.filter(function(number){
			return number === itemToFind;
		})
		return indexPositions;
	},


	sumOfAllEvenNumbersSquared: function (arr) {
		evenNumbers = [];
		// GET EVEN NUMBERS INTO ARRAY
			for (var i = 0; i < arr.length; i++){
				if ((arr[i] % 2) === 0){
					evenNumbers.push(arr[i]);
				}
			}
			// GET SQUARED VERSIONS OF EVEN NUMBERS IN ARRAY - NOT CONVINCED THIS IS CORRECT EVEN THOUGH IT PASSES!
			var total = evenNumbers.reduce(function(sum, value){
				return (sum * sum) + (value * value);
			})
			return total;
	}

}

module.exports = arrayTasks


					