var funcoes = require( "./funcoes.js")

function telaConsultar() {
  var indice = 9
  var proxTelaouBuscanome = "999"
  while (proxTelaouBuscanome=="999" || proxTelaouBuscanome =="1") {
    funcoes.porCabecalho("Consultar Pedido")
    funcoes.consultarListaPedidos(indice)
    proxTelaouBuscanome = funcoes.gerarPergunta("Digite 1 para próxima página, 2 para buscar por nome ou ENTER para sair: ")
    indice = indice + 10
  }
  if(proxTelaouBuscanome == 2) {
    var nome = funcoes.gerarPergunta("Digite um nome: ")
    funcoes.porCabecalho("Consultar Pedido")
    funcoes.buscaNome(nome)
  }
  funcoes.voltarTelainicial() 
}

module.exports = {
  telaConsultar
}