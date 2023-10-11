function findRotatedIndex(arr, target) {
    let leftInd = 0;
    let rightInd = arr.length-1;
    while(leftInd<=rightInd){
        let mid = Math.floor((leftInd+rightInd)/2);
        
        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid] < target){
            if(arr[rightInd] < target){
                rightInd = mid-1;
            }
            else{
                leftInd = mid+1;
            }
        }

        else if(arr[mid] > target){
            if(arr[leftInd] > target){
                if(arr[leftInd] > arr[mid]){
                    rightInd = mid-1;
                }
                else{
                    leftInd = mid+1;
                }
            }
            else{
                rightInd = mid-1;
            }
        }
    }
    return -1;
}


module.exports = findRotatedIndex