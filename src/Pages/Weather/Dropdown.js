import React from "react";
import {
  Button,
  NavItem,
  NavLink,
} from 'reactstrap';
import { getLonLat } from '../../util/apiCalls.js'


export const Dropdown = ({ cities, deleteCity }) => {
  const cityNavItem = cities.map(city => {
    return (
      <NavItem key={city.id}>
        <NavLink href="#">
          <i className="nav-link-icon pe-7s-wallet"> </i>
          <span onClick={() => getLonLat(city.name)}>{city.name}</span>
          <Button size="sm" className="ml-auto" color="danger" onClick={() => deleteCity(city.id)}> X </Button>
        </NavLink>
      </NavItem>
    )
  })
  return (
    cityNavItem
  )
}