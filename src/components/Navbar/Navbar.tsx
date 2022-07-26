import React from "react"
import './Style.scss'
import carrinho from './assets/carrinho.svg'
import lupa from './assets/lupa.svg'
import user from './assets/user.svg'

import logo from './assets/vector1.svg'
import logo2 from './assets/vector2.svg'
import logo3 from './assets/vector3.svg'

const Navbar:React.FC = () => {
    return(
        <div className="nav">
            <p>
            <img src={logo} width="27.49vw" height="32.91vw"></img>
            <img src={logo2} width="25.72vw" height="19.22vw"></img>
            <img src={logo3} width="32.82vw" height="23.65vw"></img>
                Plant'x
            </p>
            <ul>
                <li>
                    <button>Plants</button>
                </li>
                <li>
                    <button>For oficces</button>
                </li>
                <li>
                    <button>Plants care</button>
                </li>
                <li>
                    <button>About</button>
                </li>
            </ul>
        
            <img src={lupa}></img>
            <img src={user}></img>
            <img src={carrinho}></img>
            
        </div>
    );

}

export default Navbar;