var telaIncluir = require( "./telas/telaIncluir.js")
var telaExcluir = require( "./telas/telaExcluir.js")
var telaConsultar = require( "./telas/telaConsultar.js")
var telaAlterar = require( "./telas/telaAlterar.js")
var funcoes = require( "./telas/funcoes.js")

module.exports = {principal}

function principal() {
  funcoes.porCabecalho("Pedidos de Bolos")
  funcoes.colocarOpcoes()
  var opcaoEscolhida = funcoes.receberOpcao()

  switch(opcaoEscolhida) {
    case "1":
    telaIncluir.telaIncluir()
    break
    case "2":
    telaExcluir.telaExcluir()
    break
    case "3":
    telaAlterar.telaAlterar()
    break
    case "4":
    telaConsultar.telaConsultar()
    break   
    case "5":
    break   
    default:
    console.log("Opção Inválida!")
    break
  }  
}
principal()