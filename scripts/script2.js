const arr = document.getElementsByClassName("num");

function generateRandomArray(){
    for(let i = 0; i < arr.length; i++){
        arr[i].textContent = Math.ceil((Math.random()*100));
    }
}

async function bubbleSort(delay = 2000){
    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length - i - 1; j++){

            arr[j].style.backgroundColor = "grey"
            arr[j + 1].style.backgroundColor = "grey"

            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

            if (parseInt(arr[j].textContent) > parseInt(arr[j + 1].textContent)) {

                const temp = arr[j].textContent;
                arr[j].textContent = arr[j + 1].textContent;
                arr[j + 1].textContent = temp;
                
                arr[j].style.transform = "translate(calc((100vw - 500px)/7))";
                arr[j + 1].style.transform = "translate(calc((100vw - 500px)/-7))"; 

                await new Promise((resolve) =>
                    arr[j].addEventListener("transitionend", resolve, { once: true })
                );

                arr[j].style.transform = 'none';
                arr[j + 1].style.transform = 'none';
                
            }

            for(let k = 0; k < arr.length; k++){
                arr[k].style.backgroundColor = "white"
            }
            
        }

        for(let i = 0; i < arr.length; i++){
            arr[i].style.backgroundColor = "white"
        }
        
        arr[arr.length-i-1].style.backgroundColor = "green"

    }
}