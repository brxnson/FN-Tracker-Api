const FortniteTracker = require ("fn-tracker-api")
const client = new FortniteTracker("Your fortnite-tracker api token")

client.getStore().then(data => console.log(data))