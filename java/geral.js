/* ---------- PAINEL PRINCIPAL PORTÁRIA ---------- */
 
var vagas = document.querySelector('.vagas');
var usuarios = document.querySelector('.usuarios');
var veiculos = document.querySelector('.veiculos');
/* var teste = document.querySelector('.geral'); */

function func_vagas() {
  /* teste.style.display = 'flex'; */
  vagas.style.display = 'flex';
  usuarios.style.display = 'none';
  veiculos.style.display = 'none'; 
}

function func_usuarios() {
  /* teste.style.display = 'flex'; */
  vagas.style.display = 'none';
  usuarios.style.display = 'flex';
  veiculos.style.display = 'none'; 
}

function func_veiculos() {
  /* teste.style.display = 'flex'; */
  vagas.style.display = 'none';
  usuarios.style.display = 'none';
  veiculos.style.display = 'flex'; 
}
