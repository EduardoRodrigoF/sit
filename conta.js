const form = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1  = document.querySelector("outResp1")

 let numCotas = 0
 let valTotal = 0
 let resposta = ""

 frameElement.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = number(frm.InValor.value)

    numContas++
    valTotal = valTotal + valor

    resposta =  valTotal + descricao + " - R$: " + valor.toFixed(2) + "/n"

    resp1.InnerText = `$(resposta)--------------------`
    resp2.InnerText = `$(numContas) Contas(s) - total R$: $(valTotal.ToFixed(2)}`

    frm.inDescricao.value = ""
    frm.InValor.value = ""
    frm.inDescricao.focus()
 })

      

        

    
