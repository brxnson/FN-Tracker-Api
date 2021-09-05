const { defaultRoute, apiEndpoints } = require ("../endpoints")
const fetch = require ("node-fetch")

module.exports = async function(token, platform, region, epicname) {
    return fetch(`https://${defaultRoute}${apiEndpoints.getPowerRankings.replace(":platform", platform).replace(":region", region).replace(":epicname", epicname)}`,
    {method: "GET", body: JSON.stringify(), headers: {"Content-Type": "application/json", "TRN-Api-Key": token}})
    .then(async data => {return await data.json()})
    .catch(err => {throw new Error(err)})
}