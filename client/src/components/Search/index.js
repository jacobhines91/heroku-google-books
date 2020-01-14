import React from "react";


function Search(props) {
    return(
        <div>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <form>
                            <div className="form-group">
                                <input className="form-control rounded-pill pl-4" type="text" placeholder="                             Search for books..." onChange={props.handleInput} />
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Search;