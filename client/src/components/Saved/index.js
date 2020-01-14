import React, { Component } from "react";
import Book from "../Book";
import API from "../../utils/API";

class Saved extends Component {

    state = {
        books: []
    }

    componentDidMount(){
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res => {
            
            this.setState({books: res.data});

        }).catch(err => console.log(err));
    }

    removeBook = id => {
        API.deleteBook(id).then(res => this.loadBooks()).catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <div className="container text-left mt-3 mb-5">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="border-bottom border-success text-success mb-3">Saved</h2>

                            {this.state.books.map(book => {
                                return <Book 
                                title={book.title} 
                                author={book.authors} 
                                description={book.description} 
                                link={book.link} 
                                image={book.image} 
                                id={book._id} 
                                removeBook={this.removeBook} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved;