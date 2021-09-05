# Fortnite Tracker api npm package
The fortnite tracker api npm package allows the ease of use for the fortnite tracker api.

# Installation

To install the fortnite-tracker api npm package run the following command inside of your projects folder

```bash
npm install fn-tracker-api
```

# Example Usage

```js
const FortniteTracker = require ("fn-tracker-api")
const FNTrackerClient = new FortniteTracker("Your fortnite tracker api key") // replace the string with your api key

FNTrackerClient.getPowerRankings("Brxnson", "pc", "eu").then(async data => console.log(data))
```

# getStore()
Get the data from the current fortnite store
```js
FNTrackerClient.getStore().then(async data => {console.log(data)})
```

## getMatchHistory("User account Id")
Get the fortnite match history from the provided users account id
```js
FNTrackerClient.getMatchHistory("b1811346250a40a1ae78d175a4806061")
```

## getPlayerStats("EpicName", "Platform")
Get the fortnite player stats from the provided epic name and platform
```js
FNTrackerClient.getPlayerStats("Brxnson", "kbm")
```

## getPowerRankings("EpicName", "Platform", "Region")
Get the power rankings of the provided user from the provided platform and region
```js
FNTrackerClient.getPowerRankings("Brxnson", "pc", "eu")
```