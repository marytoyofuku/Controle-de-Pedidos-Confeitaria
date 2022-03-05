var funcoes = require( "./funcoes.js")

function telaExcluir() {
  funcoes.porCabecalho("Excluir Pedido")  
  var numeroDoPedido = funcoes.procurePedido()
  funcoes.excluirPedido(numeroDoPedido)
  funcoes.voltarTelainicial()
}

module.exports = {
  telaExcluir
}