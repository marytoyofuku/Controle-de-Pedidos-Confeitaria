//PRINCIPAL
function colocarOpcoes() {
  const opcao = ("1. Incluir Pedido" + "\n" + "2. Excluir Pedido" + "\n" + "3. Alterar Pedido" + "\n" + "4. Consultar Pedidos" + "\n" + "5. SAIR" +"\n")
  console.log(opcao)
}

//INCLUIR
function porCabecalho(titulo) {  
  const telaInicial = titulo
  console.clear()  
  console.log("\n" + "\n" + "_".repeat(88)+ "\n" + "\n" + " ".repeat(32) + telaInicial + "\n" + "_".repeat(88) + "\n")   
} 

function receberDados() {  
  const nome = gerarPergunta('Nome: ')
  const telefone = gerarPergunta('Telefone: ')
  const pedido = gerarPergunta('Pedido: ')
  const valor = gerarPergunta('Valor Total: ')
  const numeroPedido = incluirTxt(nome, telefone, pedido, valor)
  voltarDadosPedido(numeroPedido)
}   
  
function voltarTelainicial() {
  console.log("\n".repeat(2))
  const readLineSync = require("readline-sync")
  const tecleEnter = readLineSync.question("Enter para voltar")
  const voltarArquivo = require("../telaInicial.js")
  voltarArquivo.principal()
}

//EXCLUIR
function procurePedido() {
  var numPedido = gerarPergunta('Número do pedido: ')
  console.log(" ")
  voltarDadosPedido(parseInt(numPedido))
  return parseInt(numPedido)
}

function voltarDadosPedido(numero) {
  cabecalhoClientes()
  const dadosPedido = consultarPedidoNumero(numero)
  const tamanhoCampo = [6, 24, 10, 29, 10]
  console.log(gerarLinhaImpressao(dadosPedido, tamanhoCampo))
}

function gerarLinhaImpressao(dadosPedido, tamanhoCampo) {
  var linhaPronta = " "
  for (var i=0; i < dadosPedido.length; i++) {
    var numeroCaracteres = dadosPedido[i].length
    if (numeroCaracteres > tamanhoCampo[i]){
      linhaPronta = linhaPronta + dadosPedido[i].slice(0, tamanhoCampo[i])
    } else {
      var diferencaCaracteres = tamanhoCampo[i]-dadosPedido[i].length
      linhaPronta = linhaPronta + dadosPedido[i] + " ".repeat(diferencaCaracteres)
    }
    if (i != dadosPedido.length-1) {
      linhaPronta = linhaPronta + " - "
    }
  }
  return linhaPronta
}

function excluirPedido(numeroDoPedido) {
 console.log("\n")
  var resposta = gerarPergunta('Deseja excluir pedido(S/N): ')
  if(resposta === "s" || resposta === "S") {
    excluirTxt(numeroDoPedido)
      
  } else {
    console.log("Pedido não excluido!")
  }  
}

//ALTERAR
function campoAlterarENovoDado() {
console.log("\n")
  const opcao = gerarPergunta("1. Alterar nome" + "\n" + "2. Alterar telefone" + "\n" + "3. Alterar Pedido" + "\n" + "4. Alterar valor" + "\n" + "\n" + "Escolha uma opcao:  ")
  const pergunta = opcoao_alterar_dados_pedido(opcao)

  if (pergunta != "invalido") {
    console.log(" ")
    const novo_dado = gerarPergunta(pergunta) 
    return [opcao,novo_dado] 
  }  
} 

function opcoao_alterar_dados_pedido(escolha) {
  var retorno_pergunta = ""
  switch(escolha){
    case"1":
    retorno_pergunta = "Escreva novo nome: "
    break
    case"2":
    retorno_pergunta = "Escreva novo telefone: "
    break
    case"3":
    retorno_pergunta = "Alterar pedido: "
    break
    case"4":
    retorno_pergunta = "Novo valor: "
    break
    default:
      retorno_pergunta = "invalido"
      console.log("opção inválida!")
      break
  }
  return retorno_pergunta
}


//CONSULTAR
function receberOpcao() {
const resposta = gerarPergunta("Digite a opcao:  ")
if (resposta != undefined){return resposta}
}

function gerarPergunta(pergunta) {
  const leiaLinha = require('readline-sync')
  const resposta = leiaLinha.question(pergunta)
  return resposta
}  

function buscaNome(nome) {
  cabecalhoClientes()
  var pedidos = consultaTxt()
  const tamanhoCampo = [6, 24, 10, 29, 10]
  for (var i = 0; i< pedidos.length; i++) {
    if(pedidos[i][1].match(nome)) {
    console.log(gerarLinhaImpressao(pedidos[i], tamanhoCampo))
    }
  }console.log("\n")
}

function cabecalhoClientes() {
  console.log("\n" + "=".repeat(88) + "\n" + " " + "Número" + " ".repeat(3) + "Nome" + " ".repeat(23) + "Telefone" + " ".repeat(5) + "Pedido" + " ".repeat(26) +"Valor")
  console.log("=".repeat(88))
}

function consultarListaPedidos(indice) {
  cabecalhoClientes()
  const tamanhoCampo = [6, 24, 10, 29, 10]  
  var pedidos = consultaTxt()
  var indices = calculoIndice(pedidos.length, indice)
  var indiceInicial = indices[0]
  var indiceFinal = indices[1]
    for (var i = indiceInicial; i< indiceFinal; i++) {
      console.log(gerarLinhaImpressao(pedidos[i], tamanhoCampo))
    }
    console.log("\n")
}

function calculoIndice(tamArray,indice) {
  var indiceInicial = 0 
  var indiceFinal = 0
  if (indice == 9) {
    indiceFinal = indice +1
  }
  if(indice > 9) {
    indiceFinal = indice +1
    indiceInicial = indice -9
  }
  if(tamArray < indiceFinal) {
    indiceFinal = tamArray
  }
  return [indiceInicial, indiceFinal]
}   

//Funçoes relacionadas txt
function consultaTxt() {
  const leiaTxt = require('fs')
  const linhas = leiaTxt.readFileSync("./txt/dados.txt", 'utf8')
  var pedidos = converteTXTEmArray(linhas)
  return pedidos  
}

function conveterArrayEmPontoVirgula(Array) {
  var pedidos = ""
  for (var linha=0; linha<Array.length; linha++) {
    
    var numero = Array[linha][0]
    var nome = Array[linha][1]
    var telefone = Array[linha][2]
    var pedido = Array[linha][3]
    var valor = Array[linha][4]

      if(pedidos === "") {
        pedidos = numero + ";" + nome+ ";" + telefone+ ";" + pedido+ ";" + valor
      }else{
        pedidos = pedidos +"\n"+numero + ";" + nome+ ";" + telefone+ ";" + pedido+ ";" + valor
      }
  }
  return pedidos
}

function converteTXTEmArray(Txt) {
  var pedidos = []
  Txt = Txt.split('\n')
  for (var i=0; i<Txt.length; i++) {
    pedidos.push(Txt[i].split(";"))    
  }
  return pedidos  
}

function consultarPedidoNumero(numero) {
  const pedidos = consultaTxt()
  for(var i=0; i<pedidos.length; i++) {
    if(parseInt(pedidos[i][0]) == numero) {
      return pedidos[i]
    }
  }
}

function alterarTxt(opcaoEDado,numeroDoPedido) {
  var coluna = opcaoEDado[0]
  var novo_dado = opcaoEDado[1]
  var pedidos = consultaTxt()
  for(var i=0; i<pedidos.length; i++) {
    if(parseInt(pedidos[i][0]) == numeroDoPedido) {
      pedidos[i][coluna] = novo_dado
    }
  }
  var pedidoEmTxt = conveterArrayEmPontoVirgula(pedidos)
  const leiaTxt = require('fs')
  leiaTxt.writeFileSync('./txt/dados.txt', pedidoEmTxt, function(erro) {
    if(erro) {
        throw erro;
    }
  })
  console.log("Pedido alterado com sucesso!")
}

function gerarNumero() {
  const pedidos = consultaTxt()
  const proxPedidoGerado = parseInt(pedidos[pedidos.length - 1][0]) + 1
  return proxPedidoGerado
}


function incluirTxt(nome, telefone, pedido, valor) {
  const leiaTxt = require('fs')
  const pedidosTxt = leiaTxt.readFileSync("./txt/dados.txt", 'utf8')
  const numero = gerarNumero()
  const novoPedidos = pedidosTxt + '\n' + numero + ";" + nome+ ";" + telefone+ ";" + pedido+ ";" + valor
  leiaTxt.writeFileSync('./txt/dados.txt', novoPedidos, function(erro) {
    if(erro) {
        throw erro;
    }
  })
  console.log("Adicionado com sucesso!")
  return numero
}

function excluirTxt(numeroDoPedido) {
  var pedidos = consultaTxt()
  for(var i=0; i<pedidos.length;i++) {    
    if(pedidos[i][0]==(numeroDoPedido)) {
      pedidos.splice(i,1)
    }
  }
  var pedidoEmTxt = conveterArrayEmPontoVirgula(pedidos)
  const leiaTxt = require('fs')
  leiaTxt.writeFileSync('./txt/dados.txt', pedidoEmTxt, function(erro) {
    if(erro) {
        throw erro;
    }
  })
  console.log("Pedido excluído com sucesso!")
}

  module.exports = {
    porCabecalho, receberDados, colocarOpcoes, receberOpcao, voltarTelainicial, excluirPedido, procurePedido, campoAlterarENovoDado, voltarDadosPedido, consultarListaPedidos, gerarPergunta, buscaNome, alterarTxt
  }