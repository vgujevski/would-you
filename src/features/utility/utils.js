export const formatVoteCountMessage = (votes) => {
  return votes === 1 ? `${votes} vote` : `${votes} votes`
}