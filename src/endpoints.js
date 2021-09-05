module.exports = {
    defaultRoute: "api.fortnitetracker.com/v1",
    apiEndpoints: {
        getStore: "/store",
        getChallenges: "/challenges",
        getMatchHistory: "/profile/account/:accountId/matches",
        getPowerRankings: "/powerrankings/:platform/:region/:epicname",
        getPlayerStats: "/profile/:platform/:epicnickname"
    }
}