module.exports = function createDreamTeam(members) {
  throw 'Not implemented';
  if (!Array.isArray(members)) return false

  let team = members.map(name => {
    if (typeof name == 'string') {
      return name.trim().charAt(0).toUpperCase()
    }
  })

  return team.sort().join("")
};