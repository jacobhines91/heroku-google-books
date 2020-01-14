import React, { Component } from "react";
import Search from "../Search";
import axios from "axios";
import API from "../../utils/API";

// require("dotenv").config();

class Results extends Component {

    state = {
        books: [{
            title: "Howard Stern Comes Again",
            authors: "Howard Stern",
            description: "Rock stars and rap gods. Comedy legends and A-list actors. Supermodels and centerfolds. Moguls and mobsters. A president. Over his unrivaled four-decade career in radio, Howard Stern has interviewed thousands of personalities—discussing sex, relationships, money, fame, spirituality, and success with the boldest of bold-faced names. But which interviews are his favorites? It’s one of the questions he gets asked most frequently. Howard Stern Comes Again delivers his answer. This book is a feast of conversation and more, as between the lines Stern offers his definitive autobiography—a magnum opus of confession and personal exploration. Tracy Morgan opens up about his near-fatal car crash. Lady Gaga divulges her history with cocaine. Madonna reminisces on her relationship with Tupac Shakur. Bill Murray waxes philosophical on the purpose of life. Jerry Seinfeld offers a master class on comedy. Harvey Weinstein denies the existence of the so-called casting couch. An impressive array of creative visionaries weigh in on what Stern calls “the climb”—the stories of how they struggled and eventually prevailed. As he writes in the introduction, “If you’re having trouble finding motivation in life and you’re looking for that extra kick in the ass, you will find it in these pages.” Interspersed throughout are rare selections from the Howard Stern Show archives with Donald Trump that depict his own climb: transforming from Manhattan tabloid fixture to reality TV star to president of the United States. Stern also tells of his Moby Dick-like quest to land an interview with Hillary Clinton in the run-up to the 2016 election—one of many newly written revelations from the author. He speaks with extraordinary candor about a variety of subjects, including his overwhelming insecurity early in his career, his revolutionary move from terrestrial radio to SiriusXM, and his belief in the power of psychotherapy. As Stern insightfully notes in the introduction: “The interviews collected here represent my best work and show my personal evolution. But they don’t just show my evolution. Gathered together like this, they show the evolution of popular culture over the past quarter century.”",
            link: "https://books.google.com/books?id=CqVkDwAAQBAJ&printsec=frontcover&dq=howard+stern&hl=&as_ebook=1&cd=1&source=gbs_api#v=onepage&q=howard%20stern&f=false",
            image: "http://books.google.com/books/content?id=CqVkDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }, {
            title: "Chariots of the Gods",
            authors: "Erich Von Daniken",
            description: "Now in a beautiful 50th anniversary edition with a new foreword and afterword by the author, this is the groundbreaking classic that introduced the theory that ancient Earth established contact with aliens. Immediately recognized as a work of monumental importance, Chariots of the Godsendures as proof that Earth has been visited repeatedly by advanced aliens from other worlds. Here, Erich von Däniken examines ancient ruins, lost cities, spaceports, and a myriad of hard scientific facts that point to extraterrestrial intervention in human history. Most incredible of all, however, is von Däniken's theory that we are the descendants of these galactic pioneers—and he reveals the archaeological discoveries that prove it... The dramatic discoveries and irrefutable evidence: • An alien astronaut preserved in a pyramid • Thousand-year-old spaceflight navigation charts • Computer astronomy from Incan and Egyptian ruins • A map of the land beneath the ice cap of Antarctica • A giant spaceport discovered in the Andes Includes remarkable photos that document mankind's first contact with aliens at the dawn of civilization.",
            link: "https://books.google.com/books?id=o0WL_-RN-xQC&dq=chariots&hl=&as_ebook=1&cd=1&source=gbs_api",
            image: "http://books.google.com/books/content?id=o0WL_-RN-xQC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        }, {
            title: "Rainbow 6",
            authors: "Tom Clancy",
            description: "In a novel of military intrigue, formidable ex-Navy SEAL John Clark takes on a world-threatening band of terrorists",
            link: "https://books.google.com/books?id=_7jR_ifoeQoC&printsec=frontcover&dq=rainbow+6&hl=&as_ebook=1&cd=1&source=gbs_api#v=onepage&q=rainbow%206&f=false",
            image: "http://books.google.com/books/content?id=_7jR_ifoeQoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }],

    }

    handleInput = event => {
        var value = event.target.value;
        this.search(value);
    }

    search = value => {
        const url = "https://www.googleapis.com/books/v1/volumes?q=";
        const end_Url = "&download=epub&key=";
        // Need to put API key in .env
        const apiKey = "AIzaSyBIU23QDl5QVbetNbxjzk9EKwftRIs02wo";

        axios.get(url + value + end_Url + apiKey)
            .then(res => {
                if (res) {
                    var bookArray = [];
                    for (var i = 0; i < res.data.items.length && 3; i++) {
                        var newBook = {
                            title: res.data.items[i].volumeInfo.title,
                            authors: res.data.items[i].volumeInfo.authors,
                            description: res.data.items[i].volumeInfo.description,
                            link: res.data.items[i].volumeInfo.previewLink,
                            image: res.data.items[i].volumeInfo.imageLinks.smallThumbnail
                        };
                        bookArray.push(newBook);
                    }
    
                    this.setState({books: bookArray});
                }
            })
    }

    saveBook = num => {
        API.saveBook(this.state.books[num]);
        alert(this.state.books[num].title + " was saved!\nGo to the saved page to see it!")
    }

    render() {
        return(
            <div>
                <Search handleInput={this.handleInput} />
                <div className="container text-left mt-3 mb-5">
                    <div className="row">
                        <div className="col-12">
                           

                            <div className="card">
                                <h5 className="card-header">{this.state.books[0].title}</h5>
                                <div className="card-body row">
                                    <div className="col-lg-3 d-none d-lg-block">
                                        <img src={this.state.books[0].image} alt="book" />
                                    </div>
                                    <div className="col-lg-9 flex-column d-flex text-right">
                                        <h5 className="card-title font-italic text-left">- By {this.state.books[0].authors} </h5>
                                        <p className="card-text text-left">{this.state.books[0].description} </p>
                                        <div className="mt-auto ml-auto">
                                            <a href={this.state.books[0].link} target="blank" className="btn btn-warning mr-3">Check It Out</a>
                                            <button className="btn btn-primary" onClick={() => this.saveBook(0)}>Save </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        
                            <div className="card mt-3">
                                <h5 className="card-header">{this.state.books[1].title}</h5>
                                <div className="card-body row">
                                    <div className="col-lg-3 d-none d-lg-block">
                                        <img src={this.state.books[1].image} alt="book" />
                                    </div>
                                    <div className="col-lg-9 flex-column d-flex text-right">
                                        <h5 className="card-title font-italic text-left">- By {this.state.books[1].authors} </h5>
                                        <p className="card-text text-left">{this.state.books[1].description} </p>
                                        <div className="mt-auto ml-auto">
                                            <a href={this.state.books[1].link} target="blank" className="btn btn-warning mr-3">Check It Out</a>
                                            <button className="btn btn-primary" onClick={() => this.saveBook(1)}>Save </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <h5 className="card-header">{this.state.books[2].title}</h5>
                                <div className="card-body row">
                                    <div className="col-lg-3 d-none d-lg-block">
                                        <img src={this.state.books[2].image} alt="book" />
                                    </div>
                                    <div className="col-lg-9 flex-column d-flex text-right">
                                        <h5 className="card-title font-italic text-left">- By {this.state.books[2].authors} </h5>
                                        <p className="card-text text-left">{this.state.books[2].description} </p>
                                        <div className="mt-auto ml-auto">
                                            <a href={this.state.books[2].link} target="blank" className="btn btn-warning mr-3">Check It Out</a>
                                            <button className="btn btn-primary" onClick={() => this.saveBook(2)}>Save </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;