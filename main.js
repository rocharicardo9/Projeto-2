const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividade = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado aprovado">Aprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota minima:"))

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');
   
  if (atividade.includes(inputNomeAtividade.value)) {
    alert(`A atividade: ${inputNomeAtividade.value} jÃ¡ foi inserida`);
  } else {
      atividade.push(inputNomeAtividade.value);
      notas.push(parseFloat(inputNotaAtividade.value));

      let linha = '<tr>';
      linha += `<td>${inputNomeAtividade.value}</td>`;
      linha += `<td>${inputNotaAtividade.value}</td>`;
      linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
      linha += `</tr>`;

      linhas += linha;
  }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() { 
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
   
    const media = somaDasNotas / notas.length;

    var valorMedia = document.getElementById('media-final');
    valorMedia.textContent = media;

    
    var spanElement = document.querySelector('td span.resultado');
    spanElement.className = '';
    spanElement.classList.add('resultado')

    if(media >= notaMinima){
        spanElement.classList.add('aprovado');
        spanElement.textContent = 'Aprovado'
    }else {
        spanElement.classList.add('reprovado');
        spanElement.textContent = 'Reprovado'
    }
    
}