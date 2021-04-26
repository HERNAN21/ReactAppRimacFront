
import React, { useEffect, useContext, useState } from "react";


// import HeaderSimple from "../../../components/Commons/HeaderSimple";
// import FooterSimple from "../../../components/Commons/FooterSimple";

// import { useGetAsyncResource } from "../../../../core/hooks";
import HomeService from "../../home/api/HomeServices";
import HomeComponenst from  "../../home/components/HomeComponents"

import Loading from "../../../components/Loading";
import ErrorMsg from "../../../components/ErrorMsg";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText,
    Col
  } from 'reactstrap';
// Import CSS Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import '../../../assets/css/cotizacion.css';

import logo from '../../../assets/img/LogoRIMAC1.png';

export const USER_COTIZACION_PATH = "/cotizacion";
export const USER_COTIZACION_TITLE = "Contización";

function Cotizacion(props){
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const loading=true;
    console.log('Cotizacion')
    // const [HomeService] = useState(() => new HomeService());
    return (    
        <>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                    </NavbarBrand>
                    <img src={logo} className="logo" />
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                    <NavbarText><div ><p className="text-cuestion">¿Tienes Alguna Duda?</p></div>
                    </NavbarText>
                    <NavbarText>
                        <div> <p className="telf"> <FontAwesomeIcon icon={faPhoneAlt} />(01)4116001</p></div>
                    </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
            <div className="ccontainer">
                <Col>

                </Col>
            </div>
        </>
    );
}

export default Cotizacion;
