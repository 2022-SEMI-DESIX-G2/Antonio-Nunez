import React from "react";
import { sidebarIcons } from "./styles";

export const iconOptions = ({text, Icon}) => {
  return (
    <sidebarIcons>
      <Icon/>
        <h2>{text}</h2>
    </sidebarIcons>
        
  )
}

