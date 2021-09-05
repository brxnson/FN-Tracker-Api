const FortniteTracker = require ("fn-tracker-api")
const client = new FortniteTracker("Your fortnite-tracker api token")

client.getMatchHistory("b1811346250b21a1ae78d175a4806061").then(data => console.log(data))