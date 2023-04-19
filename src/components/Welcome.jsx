import { Box, Center, Image } from '@chakra-ui/react'
import React from 'react'

const Welcome = () => {
  return (
      <div>
          <Center>
              <Box boxSize="xxl">
                  <Image
                      src="https://images.pexels.com/photos/12715977/pexels-photo-12715977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="photo"
                  />
              </Box>
          </Center>
    </div>
  )
}

export default Welcome