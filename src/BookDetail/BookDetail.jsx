import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";


function BookDetail() {
    let prod;

    let prd = localStorage.getItem("bookdetail")
    prod = JSON.parse(prd)





    // let title=prod;
    // let image=prod.image
    // let description=prod.description
    // console.log(title)


    return (
        <div>
            <Navbar></Navbar>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card-image">
                        {prod.map((p)=>(
                            <img src={p.image} ></img>
                        ))}
                        </div>

                    </div>
                    <div className="col-md-6">
                        {prod.map((p)=>(
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {p.title}
                                    </h2>
                                    <h3></h3>
                                    <p className="card-text">
                                        {p.description}
                                    </p>
                                    <hr />
                                    <p className="card-text">
                                        Author: {p.author}
                                    </p>
                                    <hr />
                                    <p className="card-rating">
                                        Ratings: {p.rating} ⭐️
                                    </p>
                                    <a href="#" class="btn btn-primary">Buy-Now</a>
                                </div>

                                

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )

}


export default BookDetail;