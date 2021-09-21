export const formatVoteCountMessage = (votes) => {
  return votes === 1 ? `${votes} vote` : `${votes} votes`
}

export const formatPercentage = (option , secondOption) => {
  const total = option + secondOption

  return `${((100 / total) * option).toFixed(1)}%`
}

export const formatLeaderboardEntries = (users) => {
  const leaderboardEntries = Object.keys(users).map(key => {
    const entry = {
      id: users[key].id,
      name: users[key].name,
      avatarURL: users[key].avatarURL,
      numAnswers: Object.keys(users[key].answers).length,
      numQuestions: users[key].questions.length,
      score: Object.keys(users[key].answers).length + users[key].questions.length
    }

    return entry
  })

  return leaderboardEntries.sort((a, b) => b.score - a.score)
}