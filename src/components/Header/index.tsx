import { HeaderContainer, WrapperLogo } from "./styles";

import logoStock from '../../assets/stockIcon.svg'
import { NavLink } from "react-router-dom";
import { Gauge, Table } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <WrapperLogo>
        <img src={logoStock} alt="" />
        <h1>e-<strong>Stock</strong></h1>
      </WrapperLogo>

      <nav>
        <NavLink to="/" title="Dashboard" end>
          <Gauge size={32} weight="duotone" />
          <h2>Dashboard</h2>
        </NavLink>
        <hr />
        <NavLink to="/products" title="Produtos" end>
          <h2>Produtos</h2>
          <Table size={32} weight="duotone" />
        </NavLink>
    </nav>
    </HeaderContainer >
  )
}