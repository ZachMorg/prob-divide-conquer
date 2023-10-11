function findRotationCount(arr) {
    let leftInd = 0;
    let rightInd = arr.length-1;
    while(leftInd<=rightInd){
        let mid = Math.floor((leftInd+rightInd)/2);
        if(arr[mid] < arr[mid-1] && mid > leftInd){
            return mid;
        }
        if(arr[mid+1] < arr[mid] && mid < rightInd){
            return mid+1;
        }

        if(arr[mid] < arr[rightInd]){
            rightInd = mid-1;
        }
        else{
            leftInd = mid+1;
        }
    }
    return 0;
}

module.exports = findRotationCount