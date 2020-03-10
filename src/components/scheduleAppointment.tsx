import React from 'react'
import { Label, Input, Select, Textarea, Radio, Checkbox } from '@rebass/forms'
import { Box, Flex, Button } from 'rebass'

export interface ScheduleAppointmentProps {}

export const ScheduleAppointment: React.SFC<ScheduleAppointmentProps> = () => {
  return (
    <Box as='form' onSubmit={e => e.preventDefault()} py={3}>
      <Box mb={3}>
        <Box my={10}>
          {/* width={1 / 2} px={2} */}
          {/* <Label htmlFor='name'>Name</Label> */}
          <Input id='name' name='name' defaultValue='Your Name' />
        </Box>
        <Box my={10}>
          {/* width={1 / 2} px={2} */}
          {/* <Label htmlFor='email'>Email</Label> */}
          <Input id='email' name='email' defaultValue='Your Email' />
        </Box>
        <Box my={10}>
          {/* width={1 / 2} px={2} */}
          {/* <Label htmlFor='phone'>Phone</Label> */}
          <Input id='phone' name='phone' defaultValue='Your Phone Number' />
        </Box>
        <Box my={10}>
          {/* width={1 / 2} px={2} */}
          {/* <Label htmlFor='comments'>Comments</Label> */}
          <Input
            id='comments'
            name='comments'
            defaultValue='Your Comments...'
          />
        </Box>
      </Box>
      <Flex flexWrap='wrap'>
        <Box px={2} ml='auto'>
          <Button>Request Appointment</Button>
        </Box>
      </Flex>
    </Box>
  )
}
