const FortniteTracker = require ("fn-tracker-api")
const client = new FortniteTracker("Your fortnite-tracker api token")

client.getPowerRankings("Brxnson", "pc", "eu").then(data => console.log(data))