pesquisar = function () {
    var texto = $('#pesquisa').val();

    //negativa de debito
    if (texto.includes('negat') || texto.includes('débi') || texto.includes('deb')) {
      window.open("./pages/negativa-debito.html", "_self")
      //pavimentação de rua
    } else if (texto.includes('pav') || texto.includes('rua')) {
        window.open("./pages/pavimentacao-rua.html", "_self")
        //tela de consulta
    } else if(texto.includes('consul')) {
      window.open("./pages/consultas.html", "_self")
      //tela de solicitação
    } else if(texto.includes('solici')) {
      window.open("./pages/solicitacao.html", "_self")
      //tela de solicitação
    } else if(texto.includes('info')) {
      window.open("./pages/informacoes.html", "_self")
      // nenhuma tela encontrada
    } else {
      alert('Nenhum serviço encontrado');
    }
};
