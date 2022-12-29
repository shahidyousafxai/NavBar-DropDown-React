import React from 'react';
import NavLink from '../../atoms/navLink/navLink';
import navData from "../../../assets/jsonData/navData.json"

const HeaderNavigation = () => {

  const navigation = navData.map((nav) => <NavLink key={nav.id} id={nav.id} nav={nav.nav} link={nav.link} subMenu={nav.subNav} />)
  return (
    <>
      {navigation}
    </>
  )
}

export default HeaderNavigation