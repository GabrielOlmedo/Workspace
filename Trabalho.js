const i1 = document.querySelector('#i1');
const i2 = document.querySelector('#i2');
const sel = document.querySelector('#sel');
const inputcurso = document.querySelector('#inputcurso');
const section = document.querySelector('body');
let l = 0;

function adiciona (){
    let x = document.createElement('option');
    x.textContent = i1.value;
    sel.appendChild(x);
}

function seleciona (){
    if(l < 3) {
        let y = document.createElement('li');
        y.textContent = sel.value;
        section.appendChild(y);
        l++;
    }
}

section.addEventListener('click', function(e) {
    if (e.target.id === 'i2') {
        adiciona();
    }
    if(e.target.id === 'inputcurso'){
        seleciona();
    }
});


