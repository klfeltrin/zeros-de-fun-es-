function $(target) {
  return document.getElementById(target).value
}

function binomio() {
  let binomio = {
  }

  binomio.x = $('valorX')

  function setValores() {
    return [
      $(`zero`),
      $(`primeiro`),
      $(`segundo`),
      $(`terceiro`),
      $(`quarto`),
      $(`quinto`),
    ]
  }
  binomio.valores = setValores()

  function calcularbinomio() {
    total = 0
    binomio.valores.map(e = (element, index) => {
      if(!element.trim())
        return
    
      total += parseInt(element) * (Math.pow(binomio.x, index))
    })
    console.log(total)
  }

  binomio.calcularbinomio = calcularbinomio

  return binomio
}

let a = binomio()

function newBinomio(event) { 
  event.preventDefault()
  a = binomio()
  a.calcularbinomio()
}