function getNumber(num){
    var result = document.getElementById('result');

    result.value += num;
}

function clearInput(num){
    var result = document.getElementById('result');

    result.value = ''
}

function deleteOneNumber(num){
    var result = document.getElementById('result');

    result.value = result.value.toString().slice(0,-1);
}

function getResult(num){
    var result = document.getElementById('result');

    result.value = eval(result.value)
}