import BookDetail from "../BookDetail/BookDetail";
import Navbar from "../Navbar/Navbar";
import BookData from "../data/Bookdata";
import Book from "./Book/Book";


function Booklist() {

 

    return (
        <div>
            <Navbar></Navbar>

            <div>

                <h2 className="text-center">All Books</h2>
                <div className="row">
                    {BookData.map((item) => (<Book data={item}></Book>))}

                </div>
            </div>
        </div>
    )






}
export default Booklist;