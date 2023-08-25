// sample array function will later be optimized to accept any array
let sample_arr = [12, 4, 5, 3, 72, 87, 20, 43, 67, 8]

// Declaring global variables / getting HTML DOM elements...
const binary = document.querySelector('.binary')
const arr = document.querySelectorAll('.num')
const target = document.querySelector('.subject')

// Filling the empty span with the sample array
for(let i = 0; i < arr.length; i++){
    arr[i].textContent = sample_arr[i];
}

const isSorted = (array) => {
    let sorted = true;
    
    for (let x = 0; x < array.length - 1; x++) {
        if (array[x] > array[x + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}

function binarySearch(){
    console.log(sample_arr);
    let start = 0;
    let end = sample_arr.length - 1;
    
    while(start <= end){
        let mid = Math.floor((end + start) / 2);
        console.log(mid)
        console.log(sample_arr[mid])

        if(target.value == sample_arr[mid]){
            const alert = document.createElement('p');
            alert.textContent = `${target.value} FOUND` ;
            alert.style.textAlign = 'center'
            binary.appendChild(alert);
            return true;
        }else if (target.value > sample_arr[mid]){
            for(let j = start; j <= mid; j++){
                arr[j].style.backgroundColor = "grey"
            }
            start = mid + 1; 
        }else{
            for(let j = mid; j <= end; j++){
                arr[j].style.backgroundColor = "grey"
            }
            end = mid - 1;
        }
    }

    const alert = document.createElement('p');
    alert.textContent = `${target.value} NOT FOUND` ;
    alert.style.textAlign = 'center'
    binary.appendChild(alert);
    return false;
    
}
function runSearch(){
    // Reset background color
    for (let j = 0; j < arr.length; j++) {
        arr[j].style.backgroundColor = "white";
    }

    //check if array is sorted
    if(!isSorted(sample_arr)){
        sample_arr = sample_arr.sort( (a, b) => a - b);
    }
    
    for(let i = 0; i < arr.length; i++){
        arr[i].textContent = sample_arr[i];
    }
    
    binarySearch();
}