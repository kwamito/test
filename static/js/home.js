document.onload(console.log('Welcome'))

function valid() {
    var user = document.getElementById('formGroupExampleInput').value
    var password = document.getElementById('formGroupExampleInput2').value
    if (user === 'admin' && password === 'admin'){
        alert('Welcome admin')
    }else{
        alert('Wrong username or password try again!')
    }
}