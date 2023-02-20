import { HeaderContainer, WrapperLogo } from "./styles";

import logoStock from '../../assets/stockIcon.svg'
import { NavLink } from "react-router-dom";
import { Gauge, Table } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <WrapperLogo>
        <img src={logoStock} alt="" />
        <h1>Controle de Estoque</h1>
      </WrapperLogo>

      <nav>
        <NavLink to="/" title="Dashboard" end>
          <Gauge size={40} weight="thin" />
        </NavLink>
        <NavLink to="/products" title="Produtos" end>
          <Table size={40} weight="thin" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}