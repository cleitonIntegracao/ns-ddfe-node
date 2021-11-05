// Exemplo Download de Evento de 

const downloadLot = require('./node_modules/ns-ddfe-node/ns_modules/ddfe_module/Consumo da API DDFe/downloadLote')

let corpo = new downloadLot.Body(
    "07364617000135",
    00,
    "true"
)

downloadLot.sendPostRequest(corpo,"./docs/ddfe").then(getResponse => { console.log(getResponse) })