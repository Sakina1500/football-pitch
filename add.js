export function addNewPlayer(team, player) {
    for (let i = 0; i < team.length; i++) {
        if (team[i] !== player) {
            team[i] = player;
            return true;
        }
    }

    return `There is already player in this position!`;
}


// export function addNewPlayer(currentTeamData, playerData) {
//     const positionExists = currentTeamData.players.some(p => p.positionId === playerData.positionId);
//     if (positionExists) {
//         alert("Bu pozitsiyada allaqachon o'yinchi bor! Avval uni tahrirlang yoki o'chiring.");
//         return false;
//     }
//     currentTeamData.players.push(playerData);
//     return true;
// }
