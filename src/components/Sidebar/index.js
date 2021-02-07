import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrap
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return ( 
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
      <SidebarLink to="/">Pizzas</SidebarLink>
      <SidebarLink to="/">Deserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarWrap>
        <SidebarRoute to="/">Order Now
        </SidebarRoute>
      </SidebarWrap>
    </SidebarContainer>
   );
}
 
export default Sidebar;