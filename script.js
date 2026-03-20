const form = document.getElementById('form-item');
const listaCorpo = document.getElementById('lista-corpo');
const totalGeralElt = document.getElementById('valor-total-geral');
let itensCesta = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const qtd = parseInt(document.getElementById('qtd').value);
    const preco = parseFloat(document.getElementById('preco').value);

    // Validação básica (conforme mencionado no seu README)
    if (!nome || isNaN(qtd) || isNaN(preco)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const item = {
        nome,
        qtd,
        preco,
        totalItem: qtd * preco
    };

    itensCesta.push(item);
    atualizarInterface();
    form.reset();
});

function atualizarInterface() {
    listaCorpo.innerHTML = "";
    let somaTotal = 0;

    itensCesta.forEach((item) => {
        somaTotal += item.totalItem;
        const linha = `
            <tr>
                <td>${item.nome}</td>
                <td>${item.qtd}</td>
                <td>R$ ${item.preco.toFixed(2)}</td>
                <td>R$ ${item.totalItem.toFixed(2)}</td>
            </tr>
        `;
        listaCorpo.innerHTML += linha;
    });

    totalGeralElt.innerText = `R$ ${somaTotal.toFixed(2)}`;
}
