function count() {
    let input = document.getElementById('input').value;
    if (input.length > 200) {
        input = input.substring(0, 200);
        document.getElementById('input').value = input;
    }
    document.getElementById('num').innerHTML = '(' + input.length + '/50)'
}
count();