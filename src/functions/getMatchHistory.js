const fetch = require("node-fetch")
const { defaultRoute, apiEndpoints } = require ("../endpoints")

module.exports = async function(token, accountId) {
    return fetch(`https://${defaultRoute}${apiEndpoints.getMatchHistory.replace(":accountId", accountId)}`,
    {method: "GET", body: JSON.stringify(), headers: { "Content-Type": "application/json", "TRN-Api-Key": token }})
    .then(async data => {return await data.json()})
    .catch(err => {throw new Error(err)})
}