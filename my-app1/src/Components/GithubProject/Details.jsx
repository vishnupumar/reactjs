import React, { useContext } from 'react'
import myContext from '../Context/myContext'
import { Box, Card, Text, CardBody, CardHeader, Stack, StackDivider, Heading } from '@chakra-ui/react'

export const Details = () => {
  const { data } = useContext(myContext);

  return (
    <Card height="100%" m="0 10px 0 10px">
      <CardHeader>
        <Heading size='md'>User details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Followers
            </Heading>
            <Text pt='2' fontSize='sm'>
              {data.followers || "100"}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Following
            </Heading>
            <Text pt='2' fontSize='sm'>
              {data.following || "100"}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Public Repositories
            </Heading>
            <Text pt='2' fontSize='sm'>
              {data.public_repos || "100"}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}
