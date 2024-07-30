const form = document.getElementById('form-telefone');
const nomes = [];
const numeros = [];

let linhas = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato de: ${inputNomeContato.value} já foi inserida`);
    } else if (numeros.includes(parseInt(inputNumeroContato.value))) {
        alert(`O número: ${inputNumeroContato.value} já foi inserida`);
    } else {

    nomes.push(inputNomeContato.value);
    numeros.push(parseInt(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}
