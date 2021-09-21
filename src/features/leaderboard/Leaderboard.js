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
        {
          leaderboardEntries.map(user => (
            <LeaderboardItem key={user.id} user={user}/>
          ))
        }
      </div>
    </div>
  )
}