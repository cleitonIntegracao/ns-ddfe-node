// Exemplo Download de Evento de 

const downloadLot = require('ns-ddfe-node/ns_modules/ddfe_module/ddfe_API/downloadLote')

let corpo = new downloadLot.Body(
    "CNPJ do interessado",
    2345,
    "false"
)

downloadLot.sendPostRequest(corpo,"./docs/ddfeLot").then(getResponse => { console.log(getResponse) })