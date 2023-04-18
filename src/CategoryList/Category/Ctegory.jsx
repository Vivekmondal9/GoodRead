function Category(props){
    const {catId,catName,catImage}=props.data;

    return(
        <div class="col-md-3 col-sm-12 col-lg-3">
            <div className="card">
                <img src={catImage} alt="Load Image" />
                <div className="card-body">
                    <h5 className="card-title">{catName}</h5>
                </div>
            </div>
        </div>
    )

}

export default Category;