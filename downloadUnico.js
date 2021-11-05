// Exemplo Download de Evento de 

const downloadUnic = require('./node_modules/ns-ddfe-node/ns_modules/ddfe_module/Consumo da API DDFe/downloadUnic')

let corpo = new downloadUnic.Body(
    "43211007364617000135570000000023881000003305",
    "07364617000135"
)

downloadUnic.sendPostRequest(corpo,"./docs/ddfe").then(getResponse => { console.log(getResponse) })