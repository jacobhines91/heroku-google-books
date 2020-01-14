import React from "react";

import "./style.css"
function Header() {
    return(
        <div>
            <div className="header-t"></div>
            <h1 className="display-4 font-custom">
            <span className="header">Google Books Search</span>
                
            </h1>
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-1 border-bottom border-primary mr-5">
                        <a href="/" className="text-primary">Search</a>
                    </div>
                    <div className="col-1 border-bottom border-success">
                        <a href="/saved" className="text-primary">Saved</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Header;