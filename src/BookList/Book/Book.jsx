

function Book(props){
    const {title,image}=props.data

return(
    <div className="col-md-3">
        <div className="card">
            <img src={image} alt="Load Image" className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <a href="#" className="btn btn-dark btn-block">Show Details</a>
            </div>
        </div>
    </div>
)




}

export default Book