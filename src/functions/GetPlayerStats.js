const { defaultRoute, apiEndpoints } = require ("../endpoints")
const fetch = require ("node-fetch")

module.exports = async function(token, platform, epicname) {
    return fetch(`https://${defaultRoute}${apiEndpoints.getPlayerStats.replace(":platform", platform).replace(":epicnickname", epicname)}`,
    {method: "GET", body: JSON.stringify(), headers: { "Content-Type": "application/json", "TRN-Api-Key": token }})
    .then(async data => {return await data.json()})
    .catch(err => {throw new Error(err)})
}