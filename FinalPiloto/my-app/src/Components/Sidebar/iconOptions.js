import React from "react";
import { SidebarIcons } from "./styles";

export const IconOptions = ({text, Icon, active}) => {
  return (
    <SidebarIcons active = {active} >
      <Icon/>
        <h2>{text}</h2>
    </SidebarIcons>
        
  )
}

