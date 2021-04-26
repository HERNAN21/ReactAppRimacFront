
import React, { useEffect, useContext, useState } from "react";

import {
    InputGroup,
    Input,
    Button,
    FormGroup,
    Label
   } from 'reactstrap';

// Import CSS Style

import '../../../assets/css/home.css';

import logo_rimac from '../../../assets/img/LogoRIMAC1.png';
import logo from '../../../assets/img/Fondo1.png';
import seguro_img from '../../../assets/img/seguro.png';

// Import FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


export const USER_HOME_PATH = "/home";
export const USER_HOME_TITLE = "Home";

function Home(props){
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [splitButtonOpen, setSplitButtonOpen] = useState(false);

    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

    
    const loading=true;
    // const [HomeService] = useState(() => new HomeService());
    
    return (    
        <>  
            <div className="contenedor">

                <div className="container1">
                    <div className="fondo">
                        <img src={seguro_img} className="imagen1" alt="logo" />
                        <img src={logo} className="imagen2" alt="logo" />
                        <img src={logo_rimac} className="imagen3" alt="logo" />
                    </div>
                    <div className="contenedor-info">
                        <p className="nuevo">¡Nuevo!</p>
                        <div className="seguro"><p className="seguro_s">Seguro</p><p className="seguro_v">Vehicular</p></div>
                        <p className="tracking">Tracking</p>

                        <p className="segimiento">Cuentanos donde le haras seguimiento a tu seguro</p>

                        <p className="derechos">
                            © 2020 RIMAC Seguros y Reaseguros.
                        </p>
                    </div>
                </div>


                <div className="container2">
                    {/* contactenos */}
                    <div className="conatctenos">
                        <div ><p className="text-cuestion">¿Tienes Alguna Duda?</p></div>
                        <div> <p className="telf"> <FontAwesomeIcon icon={faPhoneAlt} />(01)4116001</p></div>
                    </div>
                    <div className="form-data">
                        <p className="text-form">Déjanos tus datos</p>
                        <div>
                            <InputGroup>
                                <Input type="select" name="select" id="exampleSelect" className="select" style={{height: "50px"}}>
                                    <option value="DNI">DNI</option>
                                    <option value="DNI">CARNET</option>
                                    <option value="DNI">RUC</option>
                                </Input>
                                <Input placeholder="Nro. de Doc" style={{height: "50px"}}/>
                            </InputGroup>
                        </div>
                        <br/>
                        <div>
                            <InputGroup>
                                <Input placeholder="Celular" style={{height: "50px"}}/>
                            </InputGroup>
                        </div>
                        <br/>
                        <div>
                        <InputGroup>
                            <Input placeholder="Placa" style={{height: "50px"}}/>
                        </InputGroup>
                        </div>
                        <br/>
                        <FormGroup check>
                            <Input type="checkbox" />{' '}
                            Acepto la <a href=""> Política de Protecciòn de Datos</a> <br/>
                            <a href=""> Personales</a> y los <a href=""> Términos y Condiciones.</a>
                        </FormGroup>
                        <br />
                        <div>
                        <InputGroup>
                            <Button color="danger">COTIZALO</Button>
                        </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
