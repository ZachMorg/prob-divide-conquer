function findFloor(arr, floorVal) {
  let leftInd = 0;
  let rightInd = arr.length-1;
  while(leftInd<=rightInd){
    let mid = Math.floor((rightInd+leftInd)/2);
    if(arr[mid] === floorVal){
        return arr[mid];
    }
    else if(arr[mid] > floorVal){
        if(arr[mid-1] <= floorVal){
            return arr[mid-1];
        }
        else{
            rightInd = mid - 1;
        }
    }
    else if(arr[mid] < floorVal){
        if(arr[mid+1] > floorVal || mid === arr.length-1){
            return arr[mid];
        }
        else{
            leftInd = mid + 1;
        }
    }
  }
  return -1;
}



module.exports = findFloor