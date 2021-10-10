import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '../nav/Navbar'
import { LeaderboardItem } from './LeaderboardItem'

import { selectAllUsers } from '../users/usersSlice'
import { formatLeaderboardEntries } from '../utility/utils'

export const Leaderboard = () => {

  const users = useSelector(selectAllUsers)

  const leaderboardEntries = formatLeaderboardEntries(users)

  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div className="leaderboard-container">
          <h2 className="page-title">Leader Board</h2>
          {
            leaderboardEntries.map(user => (
              <LeaderboardItem key={user.id} user={user} />
            ))
          }
        </div>
      </div>
    </div>
  )
}