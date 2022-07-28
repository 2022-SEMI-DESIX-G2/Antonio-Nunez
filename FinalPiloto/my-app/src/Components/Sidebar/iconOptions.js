import React from "react";
import { SidebarIcons } from "./styles";

export const IconOptions = ({text, Icon, active, primary}) => {
  return (
    <SidebarIcons active = {active} primary = {primary} >
      <Icon/>
        <h2>{text}</h2>
    </SidebarIcons>
        
  )
}

