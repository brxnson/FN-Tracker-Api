const { defaultRoute, apiEndpoints } = require ("../endpoints");
const fetch = require("node-fetch")

module.exports = async function(ApiToken) {
    return fetch(`https://${defaultRoute}${apiEndpoints.getStore}`,
    {method: "GET", body: JSON.stringify(), headers: { "Content-Type": "application/json", "TRN-Api-Key": ApiToken }})
    .then(async data => {return await data.json()})
    .catch(err => {throw new Error(err)})
}