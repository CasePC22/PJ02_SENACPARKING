function animateLabel(labelId) {
  const label = document.getElementById(labelId);
  const labelText = label.textContent;
  const letters = labelText.split('');

  label.innerHTML = ''; // Limpa o conteúdo do label

  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animation = `wave 1s ease ${index * 0.1}s`; // Atrasa cada letra em 0.1 segundos
    label.appendChild(span);
  });

  label.classList.add('wave-animation');

  setTimeout(() => {
    label.classList.remove('wave-animation');
  }, 1000 * letters.length + 100); // Tempo total baseado no número de letras (100ms de margem)
}

function logar(){
  const sobreNos = document.querySelector('.sobreNos');
  const painelSenha = document.querySelector('.painelSenha');
  const geral1 = document.querySelector('header');

  sobreNos.style.display = 'none';
  painelSenha.style.display = 'flex';
  painelSenha.style.height = '100vh';

  geral1.style.width = '100%';
  geral1.style.height = '100vh';
  
  console.log(geral);
  
 
}


