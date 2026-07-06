export function deletePlayer(team, id) {
    team.players = team.players.filter(p => p.id !== id);
    return team;
}
