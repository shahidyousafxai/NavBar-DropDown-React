import React, { useContext, useState } from 'react';
import { stateContext } from '../../../App';
import "./navLink.css"

const NavLink = (props) => {
  
  const states = useContext(stateContext);

  const handleClick = (e) => {
    states.setSubMenu(!states.subMenu)
  }

  const handleItemClick = (id) => {
    states.selectedItem == id ? (
      states.setSelectedItem(null)
      ) : (
        states.setSelectedItem(id)
      );
    // if(selectedItem == id){
    //   console.log("Selected")
    // }
  }
  // const subMenuVisiblity = selectedItem ? "subMenuAnimate" : "";


  const {
    nav,
    link,
    subMenu,
    id,
  } = props;

  return (
    <>
      <li className='links'><a href={link} id={id} className={`flex ${id == states.selectedItem && 'back'}`} onClick={e => handleItemClick(e.target.id)}>
        {nav}
        {subMenu ? (<span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${id == states.selectedItem ? 'subMenuOpen' : 'subMenuClose'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>) : ("")}
      </a></li>
    </>
  )
}

export default NavLink