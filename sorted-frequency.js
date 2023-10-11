function sortedFrequency(arr, target) {

    let lowest = findLow();
    let highest = findHigh();
    if(lowest !== -1 && highest !== -1){
        return (highest-lowest)+1;
    }
    else{
        return -1;
    }


    function findLow(){
        let leftInd = 0;
        let rightInd = arr.length-1;
        while(leftInd <= rightInd){
            let mid = leftInd+(Math.floor(rightInd-leftInd)/2);

            if(arr[mid] === target){
                if(arr[mid-1] !== target){
                    return mid;
                }
                else{
                    rightInd = mid - 1;
                }
            }

            else{
                if(arr[mid+1] === target){
                    return mid+1
                }
                else{
                    if(arr[mid] < target){
                        leftInd = mid + 1;
                    }
                    else{
                        rightInd = mid - 1;
                    }
                }
            }
        }
        return -1;
    }


    function findHigh(){
        let leftInd = 0;
        let rightInd = arr.length-1;
        while(leftInd <= rightInd){
            let mid = Math.floor((rightInd+leftInd)/2);

            if(arr[mid] === target){
                if(arr[mid+1] !== target){
                    return mid;
                }
                else{
                    leftInd = mid + 1;
                }
            }
            
            else{
                if(arr[mid-1] === target){
                    return mid-1
                }
                else{
                    if(arr[mid] > target){
                        rightInd = mid - 1;
                    }
                    else{
                        leftInd = mid + 1;
                    }
                }
            }
        }
        return -1;
    }
}


module.exports = sortedFrequency