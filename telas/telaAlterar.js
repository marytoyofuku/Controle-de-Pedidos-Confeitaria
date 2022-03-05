var funcoes = require( "./funcoes.js")

function telaAlterar() {
  funcoes.porCabecalho("Alterar Pedido")
  var numeroDoPedido = funcoes.procurePedido()
  var opcaoEDado = funcoes.campoAlterarENovoDado()
  funcoes.alterarTxt(opcaoEDado,numeroDoPedido)
  funcoes.voltarDadosPedido(numeroDoPedido)
  funcoes.voltarTelainicial()
}

module.exports = {
  telaAlterar
}
