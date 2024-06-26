import React from "react";

const Footer = ({onNewGameClick,onSuggestClick}) => {
    return (
        <div className="panel footer">
            <button onClick={onNewGameClick} className="footerbutton">New Game</button>
            <button onClick={onSuggestClick} className="footerbutton">Suggest</button>
        </div>
    );
}
export default Footer;
