export function updatePlayer(team, edit) {
    const playerPositionIndex = team.players.findIndex(p => p.id === edit.id);
    if (team.players[playerPositionIndex].id !== edit.id) {
        for (let i = 0; i < team.players.length; i++) {
            if (team.players[i].id = edit.id) {
                alert("This place is already busy!")
                return false
            }
        }
    }
    team.players[playerPositionIndex] = edit
    return true
}

export function editTeamName(team, newName) {
    if (newName && newName.trim() !== "") {
        team.name = newName.trim();
        return true;
    }
    alert("Team name couldn't be empty!");
    return false;
}
