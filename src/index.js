const { getStore, GetMatchHistory, GetPlayerStats, GetPowerRankings } = require ("./functions")
const endPoints = require ("./endpoints")

/**
 * @property {String} Token Fortnite tracker api token
 */
class FortniteTracker {
    /**
     * @param {String} Token Fortnite tracker api token
     */
    constructor(Token) {
        if (!Token) throw new TypeError("You need to specify a fortnite tracker api token!")
        if (typeof Token !== "string") throw new TypeError ("Make sure your specified api token is a valid string!")
        this.Token = Token
    }
    async getStore() {
        return getStore(this.Token)
    }

    /**
     * @param {String} accountId The requested users epic account ID
     */
    async getMatchHistory(accountId) {
        if (!accountId) throw new TypeError("Make sure you provide a valid user account id!")
        if (typeof accountId !== "string") throw new TypeError("Make sure your provided account Id is a valid account id!")
        return GetMatchHistory(this.Token, accountId)
    }

    /**
     * @param {String} Platform The platform to do the request in
     * @param {String} EpicName The epic name to make the request for
     */
    async getPlayerStats(EpicName, Platform) {
        if (!Platform || !EpicName) throw new TypeError("Make sure your provide a valid platform and epicname!")
        if (typeof Platform !== "string" || typeof EpicName !== "string") throw new TypeError("Make sure your provided platform and epic name are a valid string")
        if (Platform !== "kbm" && Platform !== "gamepad" && Platform !== "touch") throw new TypeError("Make sure your provided platform is one of 3 options: \"kbm\", \"gamepad\", \"touch\"")
        return GetPlayerStats(this.Token, Platform, EpicName)
    }

    /**
     * @param {String} Platform The platform to make the request for
     * @param {String} Region The region to make the request for
     * @param {String} EpicName The epicname to make the request for
     */
    async getPowerRankings(EpicName, Platform, Region) {
        if (!Platform || !Region || !EpicName) throw new TypeError("Make sure you provide a valid platform, region and epicname!")
        if (typeof Platform !== "string" || typeof Region !== "string" || typeof EpicName  !== "string") throw new TypeError("Make sure you provide a valid platform, region and epicname!")
        if (Platform !== "pc" && Platform !== "console" && Platform !== "mobile") throw new TypeError("Make sure your provided platform is one of these strings: \"pc\", \"console\", \"mobile\"")
        if (Region.toLowerCase() !== "eu" && Region.toLowerCase() !== "naw" && Region.toLowerCase() !== "nae" && Region.toLowerCase() !== "oce" && Region.toLowerCase() !== "asia" && Region.toLowerCase() !== "me" && Region.toLowerCase() !== "br") throw new TypeError("Make sure your provided region is a valid region!")
        return GetPowerRankings(this.Token, Platform, Region, EpicName)
    }
}

module.exports = FortniteTracker;