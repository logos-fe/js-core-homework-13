let btn = document.querySelectorAll('.btn')

for (let i = 0; i < btn.length; i++) {
    btn[i].setAttribute('keyname', btn[i].innerText)
    btn[i].setAttribute('lowerCaseName', btn[i].innerText.toLowerCase())
}

window.addEventListener('keydown', function(e) {
    for (let i = 0; i < btn.length; i++) {
        if (e.key == btn[i].getAttribute('keyname')|| e.key == btn[i].getAttribute('lowerCaseName')) {
            btn[i].classList.add('active')
        } 
    }
})

window.addEventListener('keyup', function(e) {
    for (let i = 0; i < btn.length; i++) { 
        if (e.key == btn[i].getAttribute('keyname')|| e.key == btn[i].getAttribute('lowerCaseName')) {
            btn[i].classList.remove('active')
        }
    }
})
