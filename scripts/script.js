const linear = document.querySelector('.linear')
const arr = document.querySelectorAll('.number');
const sub = document.querySelector(".subject")
const com_op = document.querySelector(".compare-op")
const originalCSS = getComputedStyle(com_op);



async function LinearSearch(delay = 1000){
    let flag = false;

    for (let j = 0; j < arr.length; j++){

        arr[j].style.backgroundColor = 'gray'

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
    
        if(arr[j].value === sub.value){
            flag = true;
            arr[j].style.backgroundColor = 'green';
            arr[j].style.color = 'white'
            sub.style.backgroundColor = 'green';
            break;
        }else{
            arr[j].style.backgroundColor = 'red';
            com_op.style.transform = `translate(calc(${(j+1)} * ((100vw - 500px)/11) + ${(j+1)*50}px), 0)`;
            com_op.style.transition = 'all 0.25s linear';
        }
    }

    return flag;
}

async function runSearch() {
    sub.style.backgroundColor = 'blue'
    com_op.style = "";
    com_op.style = originalCSS;
    for (let elem of arr) {
        elem.style.backgroundColor = 'white';
        elem.style.color = 'black';
    }

    let searchCompleted = await LinearSearch();

    if (searchCompleted) {
        const alert = document.createElement('p');
        alert.textContent = `${sub.value} FOUND` ;
        alert.style.textAlign = 'center'
        linear.appendChild(alert);
    }else{
        com_op.style = "";
        com_op.style = originalCSS;
        const alert = document.createElement('p');
        alert.textContent = `${sub.value} NOT FOUND`;
        alert.style.textAlign = 'center'
        linear.appendChild(alert);
    }

    
}
