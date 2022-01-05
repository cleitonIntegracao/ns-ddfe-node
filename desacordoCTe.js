// Exemplo Download de Evento de 

const desacordo = require('ns-ddfe-node/ns_modules/ddfe_module/ddfe_API/desacordoOperacaoCTe')
let infEvento = new desacordo.InfEvento(
    "Chave do CTe",
    2,
    "2022-01-04T15:50:00-03:00",
    "Evento de desacordo gerado para teste",
    "1",


)

let corpo = new desacordo.Body(
    "CNPJ do interessado",
    infEvento
)

desacordo.sendPostRequest(corpo,"./docs/ddfe").then(getResponse => { console.log(getResponse) })