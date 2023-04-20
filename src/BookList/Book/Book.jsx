import { json, useNavigate } from "react-router-dom"
import BookDetail from "../../BookDetail/BookDetail"
import BookData from "../../data/Bookdata"


function Book(props){
    const {title,image}=props.data;
    const product=props.data;
    const navigate=useNavigate()


    function onClick(e){
        console.log(product)
        let prd=localStorage.getItem("bookdetail")

        if(!prd){
            prd=[]
        }
        else{
            prd=JSON.parse(prd);
        }
        let p=[]
        p.push(product)

        localStorage.setItem("bookdetail",JSON.stringify(p))
        
        navigate("/bookdetail")


    }

return(
    <div className="col-md-3">
        <div className="card"  onClick={onClick}>
            <img src={image} alt="Load Image" className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <button type="submit" className="btn btn-dark btn-block">Show Details</button>
            </div>
        </div>
    </div>
)




}

export default Book