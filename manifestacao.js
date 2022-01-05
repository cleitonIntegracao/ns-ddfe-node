// Exemplo Download de Evento de 

const manifestDoc = require('ns-ddfe-node/ns_modules/ddfe_module/ddfe_API/manifestacaoDocumento')
let manifestacao = new manifestDoc.manifestacao(
    "210200"
)

let corpo = new manifestDoc.Body(
    "07364617000135",
    "33211132148099000160550000000000181515915733",
    manifestacao
)

manifestDoc.sendPostRequest(corpo,"./docs/ddfe").then(getResponse => { console.log(getResponse) })