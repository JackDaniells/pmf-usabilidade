pesquisar = function () {
    var texto = $('#pesquisa').val();

    (texto.includes('negat') || texto.includes('débi') || texto.includes('deb'))
        ? window.open("./pages/negativa-debito.html", "_self")
        : texto.includes('consul') ? window.open("./pages/consultas.html", "_self")
            : texto.includes('solici') ? window.open("./pages/solicitacao.html", "_self")
                : texto.includes('info') ? window.open("./pages/informacoes.html", "_self")
                    : console.error('Pesquisa não reconhecida');
};