import React from "react"

import './Style.scss';

const Rodape: React.FC = () => {
    return (
        <div className="section">
            <div className="first">
                <p>Beautiful living greenery for homes and offices</p>
                <button>Shop now</button>
            </div>
            <small>Wer've been mentioned in the press</small>

            <div className="endtext">
                <p>Bloomberg</p>
                <p>Forbes</p>
            </div>

        </div>
    );

}

export default Rodape;