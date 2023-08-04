/* ----------INICIO MENU PRINCIPAL PORTÁRIA ---------- */
 
var dash = document.querySelector('.dash');
var cadastros = document.querySelector('.cadastros');
var config = document.querySelector('.config');

function func_dash() {
  dash.style.display = 'flex';
  cadastros.style.display = 'none';
  config.style.display = 'none';
}

function func_cadastros() {
  dash.style.display = 'none';
  cadastros.style.display = 'flex';
  config.style.display = 'none';
}

function func_config() {
  dash.style.display = 'none';
  cadastros.style.display = 'none';
  config.style.display = 'flex';
}



/* ---------- FIM PRINCIPAL PORTÁRIA ---------- */

/* ---------- INICIO ESCONDENDO OS PAINÉIS ---------- */

document.querySelector('.cadastros').style.display = 'none';
document.querySelector('.dash').style.display = 'flex';
document.querySelector('.config').style.display = 'none';

/* ---------- FIM ESCONDENDO OS PAINÉIS ---------- */
