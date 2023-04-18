import Navbar from "../Navbar/Navbar";
import Category from "./Category/Ctegory";


function CategoryList() {
    const items = [
        { catId: 1, catName: "Fiction", catImage: "https://i.insider.com/62865ac90fdb180018cc2980?width=700" },
        { catId: 2, catName: "History", catImage:"https://m.media-amazon.com/images/I/A14VAyvYsTL.jpg" },
        { catId: 3, catName: "Science",catImage:"https://thumbs.dreamstime.com/z/science-books-shelf-open-book-glasses-lettering-science-books-shelf-open-book-glasses-lettering-white-135179577.jpg" },
        { catId: 4, catName: "External Affairs", catImage:"https://www.foreignaffairs.com/themes/fa/assets/images/subscription-cover.webp"},
    ];

    return(
        <div>
            <Navbar></Navbar>
            <h2 className="text-center">All Categories</h2>
           <div className="container">
           <div className="row">
                {items.map((item)=>(<Category data={item}/>))}
            </div>
           </div>
        </div>
    )

}

export default CategoryList;