import React from "react";

function Book(props) {
    return(
        <div>
            <div class="card mt-3">
                <h5 class="card-header">{props.title} </h5>
                <div class="card-body row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <img width src={props.image} alt="book" />
                    </div>
                    <div className="col-lg-9 flex-column d-flex text-right">
                        <h5 class="card-title font-italic text-left">- By {props.author} </h5>
                        <p class="card-text text-left">{props.description} </p>
                        <div className="mt-auto ml-auto">
                            <a href={props.link} target="blank" class="btn btn-primary mr-3">Check It Out</a>
                            <button className="btn btn-danger" id={props.id} onClick={() => props.removeBook(props.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;