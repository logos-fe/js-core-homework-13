const keys = document.querySelectorAll('.key'),
    textarea = document.querySelector('.text'),
    spaceKey = document.querySelector('.space-key'),
    capsLock = document.querySelector('.capslock-key'),
    shiftLeft = document.querySelector('.shift-left-key'),
    shiftRight = document.querySelector('.shift-right-key'),
    tab = document.querySelector('.tab-key');

console.log('jbjkbxkv');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerHTML);
    keys[i].setAttribute('keynameLC', keys[i].innerHTML.toLowerCase());
}

textarea.addEventListener('keydown', (event) => {
    for (let i = 0; i < keys.length; i++) {
        if (event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('keynameLC')) {
            keys[i].classList.add('active');
        }

        if (event.code == 'Space') {
            spaceKey.classList.add('active');
        }

        if (event.code == 'CapsLock') {
            capsLock.classList.toggle('active');
        }

        if (event.code == 'ShiftLeft') {
            shiftLeft.classList.add('active');
        }

        if (event.code == 'ShiftRight') {
            shiftRight.classList.add('active');
        }

        if (event.code == 'Tab') {
            event.preventDefault();
            event.target.value += '\t';
            tab.classList.add('active');
        }

    }
});

textarea.addEventListener('keyup', (event) => {
    for (let i = 0; i < keys.length; i++) {
        if (event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('keynameLC')) {
            keys[i].classList.remove('active');
        }
    
        if (event.code == 'Space') {
            spaceKey.classList.remove('active');
        }

        if (event.code == 'ShiftLeft') {
            shiftLeft.classList.remove('active');
        }

        if (event.code == 'ShiftRight') {
            shiftRight.classList.remove('active');
        }

        if (event.code == 'Tab') {
            tab.classList.remove('active');
        }
    }

});