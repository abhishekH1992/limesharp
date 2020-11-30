// Accept only numerics and (,) value
//parameter regexValue is for input check according to task.
function inputChecker(e, regexValue) { 
    var regex = new RegExp("^["+regexValue+"]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}

//removing empty or null value
function trimEmpty(array) {
    return array.filter(x => x !== "");
}

function display(result, task){
    //converting to string and displaying
    $('.result'+task).html(JSON.stringify(result));
}

//Task 1 function
//repeatation is max number of iteration
function repeat(val, repeatation){
    var arr, result = new Array();
    //Converting string to array and removing empty value
    arr = trimEmpty(val.split(","));
    for(var i=0; i<repeatation; i++){
        for(var j in arr){
            //pushing it to result array
            result.push(arr[j]);
        }
    }
    
    display(result,1);
    console.log(result);
    return result;
}

function reformat(str){
    //omitting vowels
    str = str.replace(/[aeiou]/ig,'');

    //lower case
    str = str.toLowerCase()

    //first letter uppercase
    str = str.charAt(0).toUpperCase() + str.slice(1);
    display(str,2);
    console.log(str);

    return str;
}

function next_binary_number(arr){
    var one = 1;
    //Converting string to array and removing empty values
    arr = trimEmpty(arr.split(""));
    for(var i=arr.length-1;i>0;i--){
        //checking last position and breaking loop if true
        if(i == arr.length - 1 && arr[i] == 0){
            arr[i] = "1";
            break;
        } else if(arr[i] == 0){ //checking if iteration is having 0 and breaking loop if true
            arr[i] = "1";
            var j = i + 1;
            while(j<arr.length){
                arr[j] = "0";
                j++;
            }
            break;
        } else { //if 1 then counting it
            one = one + 1;
        }
    }

    if(one == arr.length){ //checking length of no. of 1 and array size. If true then adding 0 at end. Ex. if it is 1,1,1,1 then result will be 1,0,0,0,0
        for(var i=0;i<arr.length;i++){
            if(i==0){
                arr[i] = '1';
            } else {
                arr[i] = '0';
            }
        }
        arr.push("0");
    }

    display(arr,3);
    console.log(arr);
    return arr;
}

$(function(){
    var val = $('#task1').val();
    if(val){
        repeat(val, 3);
    }

    var val = $('#task2').val();
    if(val){
        reformat(val);
    }

    var val = $('#task3').val();
    if(val){
        next_binary_number(val);
    }


    //task 1
    $(document).on('click', '.task1', function (e) {
        var val = $('#task1').val();
        repeat(val, 3);
    });

    //task 2
    $(document).on('click', '.task2', function (e) {
        var val = $('#task2').val();
        reformat(val);
    });

    //task 3
    $(document).on('click', '.task3', function (e) {
        var val = $('#task3').val();
        next_binary_number(val);
    });
})