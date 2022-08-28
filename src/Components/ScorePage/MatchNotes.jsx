import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const MatchNotes = () => {
  return (
    <div>
        <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" fontSize="12px" textAlign="left" mt="18px" mb="18px">
           <Heading  fontSize="14px" p="12px 14px">MATCH NOTES</Heading>
            <Divider />

          <Box p ="16px">
            <Box m ="0px 0px 16px" p ="8px 16px 0px">
            <Text p="4px 0px" fontWeight="bold">• London Spirit (Men) innings</Text>
                <Text p="4px 0px">• Powerplay 1: Balls 1 - 25 (Mandatory - 41 runs, 1 wicket)</Text>
                <Text p="4px 0px">• London Spirit (Men): 50 runs in 32 balls, Extras 1</Text>
                <Text p="4px 0px">• London Spirit (Men): 100 runs in 71 balls, Extras 6</Text>
                <Text p="4px 0px">• London Spirit (Men): 150 runs in 99 balls, Extras 6</Text>
            </Box>
            <Box m ="0px 0px 16px" p ="8px 16px 0px">
            <Text p="4px 0px" fontWeight="bold">• Welsh Fire (Men) innings</Text>
                <Text p="4px 0px">• Powerplay 1: Balls 1 - 25 (Mandatory - 21 runs, 1 wicket)</Text>
                <Text p="4px 0px">• Welsh Fire (Men): 50 runs in 54 balls, Extras 1</Text>
                <Text p="4px 0px">• Welsh Fire (Men): 100 runs in 81 balls, Extras 1</Text>
                <Text p="4px 0px">• Balls 89: Review by Welsh Fire (Men) (Batting), Umpire - Hassan Adnan, Batter - JL du Plooy (Upheld)</Text>
            </Box>
          </Box>

        </Box>


    </div>
  )
}
