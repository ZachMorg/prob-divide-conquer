function countZeroes(arr) {
  let leftInd = 0;
  let rightInd = arr.length-1;
  while(leftInd <= rightInd){
    let mid = Math.floor((rightInd + leftInd)/2);
    if(arr[mid] > 0){
        leftInd = mid + 1;
    }
    else if(arr[mid] === 0){
        if(arr[mid-1] === 0){
            rightInd = mid-1;
        }
        else if(arr[mid-1] !== 0){
            return (arr.length - mid);
        }
    }
  }
  return -1;
}


module.exports = countZeroes