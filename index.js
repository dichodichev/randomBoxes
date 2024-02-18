let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');
let btn4 = document.getElementById('4');
let btn5 = document.getElementById('5');
let btn6 = document.getElementById('6');
let btn7 = document.getElementById('7');
let btn8 = document.getElementById('8');
let btn9 = document.getElementById('9');

let btns = [
    btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9
];

btns.forEach(btn => {
    btn.addEventListener('click', onChange);
    });


    function onChange(){
        
        if((this.style.backgroundColor !== 'red') && (this.style.backgroundColor !== 'green') && (this.value = true)){
            this.style.backgroundColor = 'red';
            this.value = !true;
        }

        let freeBtns = btns.filter(button => !button.value);

        if (freeBtns.length > 0) {
            let randomBtn = Math.floor(Math.random() * freeBtns.length);
            let greenBtn = freeBtns[randomBtn];
            
            setTimeout(() => {
                greenBtn.style.backgroundColor = 'green';
                greenBtn.value = true;
                }, 500)
        }
    };


