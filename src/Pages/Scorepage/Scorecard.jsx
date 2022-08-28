import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BottomFooter } from '../../Components/BottomFooter'
import Navbar from '../../Components/Navbar'
import { SchedualFilter } from '../../Components/Schedual/SchedualFilter'
import MatchDetail from '../../Components/ScorePage/MatchDetail'

export const Scorecard = () => {

  return (
    <div style={{ marginTop: '10px'}}>
    <Box>
    <SchedualFilter/>
    <Navbar/>
    <MatchDetail/>
    <footer>
      <BottomFooter/>
    </footer>
</Box>
    </div>
  )
}
