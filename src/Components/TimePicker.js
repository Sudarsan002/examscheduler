import React from 'react'
import TextComponent from './TextComponent'

import { Time } from './Dropdown';
export const TimePicker = () => {
  return (
    // <TextComponent padding="12px" label="Time Range"/>
    <div style={{
        display: "flex",
         flexDirection: "row",
         gap:"21px"
     }}>
       <Time/>
       <Time/>
       <Time/>
     </div>

  )
}
