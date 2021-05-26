const showAll = document.getElementById('showAll');
var arr = [];


var id = 0;

//add to array
function addToArr() {
    const title = document.getElementById('title');
    const proirity = document.getElementById('proirity');
    if (title.value != '' && proirity.value != '') { //if the title input value and the proirity input value not empty -> add them values to array
        id++;
        arr.push({'id':`${id}`, 'proirity':`${proirity.value}`, 'title':`${title.value}`});   
    }else{ //if the title input value and the proirity input value is empty -> send the alert
        alert("You must fill the 'Task Title'");
    }
}

//remove from array
function removeFromArr(){
    const title = document.getElementById('title');
    for (let i = 0; i < arr.length; i++) { //go all over the array and check
        if (title.value == arr[i].title && proirity.value== arr[i].proirity) { //if the title and the proirity is the input value -> remove the object;
            arr.splice(i,1); //remove this todo from the list
            i--;
            id--;
            if (showAll !== '') { //if isn't empty -> show all the array todo list
                showNCheckColor()
            }
        }
    }
    
}

//search a title if is in the array
function search(){
    const search = document.getElementById('search');
    document.getElementById('showAll').innerHTML = '';
    for (let i = 0; i < arr.length; i++) { //go all over the array and check
        if (arr[i].title == search.value) { //if the title input value
            if (arr[i].proirity == 'high') { //if the proirity is high change the color to red
                        document.getElementById('showAll').innerHTML += `<li style="color:tomato;">Mission Number: ${arr[i].id} <br> Proirity: ${arr[i].proirity} <br> Title: ${arr[i].title} </li><br><br><br>`;
                    }
            else if (arr[i].proirity == 'low') {//if the proirity is high change the color to blue
                document.getElementById('showAll').innerHTML += `<li style="color:blue;">Mission Number: ${arr[i].id} Proirity: ${arr[i].proirity} Title: ${arr[i].title} </li><br><br><br>`;
            }        
        }
    }
}

//show the array list and change the colors
function showNCheckColor() {
    document.getElementById('showAll').innerHTML ='';
    for (let i = 0; i < arr.length; i++) {
        //if the proirity is high -> change the color to red
        if (arr[i].proirity == 'high') {
            document.getElementById('showAll').innerHTML += `<li style="color:tomato;">Mission Number: ${arr[i].id} <br> Proirity: ${arr[i].proirity} <br> Title: ${arr[i].title} </li><br><br><br>`;
        }
        //if the proirity is high -> change the color to blue
        else if (arr[i].proirity == 'low') {
            document.getElementById('showAll').innerHTML += `<li style="color:blue;">Mission Number: ${arr[i].id}  <br> Proirity: ${arr[i].proirity} <br> Title: ${arr[i].title} </li><br><br><br>`;
        }
    }
}