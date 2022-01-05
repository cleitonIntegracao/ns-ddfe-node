// Exemplo Download de Evento de 

const downloadUnic = require('./node_modules/ns-ddfe-node/ns_modules/ddfe_module/ddfe_API/downloadUnic')

let corpo = new downloadUnic.Body(
    "Chave para download",
    "CNPJ do interessado"
)

downloadUnic.sendPostRequest(corpo,"./docs/ddfeUnic").then(getResponse => { console.log(getResponse) })