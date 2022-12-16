function swappingIndex(arr){
    for(var i=0; i<arr.length/2;i++){
        var temp = arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp
        // arr[i]=arr[i+1]
        // arr[i+1]= temp
    }console.log(arr)
}

var test_arr=["a", "b", "c", "d", "e"];//start
//            [0, 1, 2, 3, 4, 5]
swappingIndex(test_arr)

//["e", "d", "c", "b", "a"];result we want