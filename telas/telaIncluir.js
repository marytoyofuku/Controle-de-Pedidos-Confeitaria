var funcoes = require( "./funcoes.js")

function telaIncluir() {
  funcoes.porCabecalho("Incluir Pedido") 
  funcoes.receberDados() 
  funcoes.voltarTelainicial()
}

module.exports = {
  telaIncluir
}
