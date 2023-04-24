import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import BookList from "./BookList/BookList"
import RegisterPage from "./RegisterPage/RegisterPage"
import LoginPage from "./LoginPage/LoginPage"
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';
import AboutPage from './AboutPage/AboutPage';
import ContactUs from './Contact/ContactUs';
import ProtectedRoute from './routes/ProtectedRoute';
import BookDetail from './BookDetail/BookDetail';
import CartPage from './CartPages/CartPage';


function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<BookList></BookList>} />
       <Route path='/home' element={<ProtectedRoute Component={CategoryList}></ProtectedRoute>}></Route>
       <Route path='/about' element={<ProtectedRoute Component={AboutPage}></ProtectedRoute>}></Route>
       <Route path='/contact' element={<ProtectedRoute Component={ContactUs}></ProtectedRoute>}></Route>
       <Route path='/login' element={<LoginPage></LoginPage>}></Route>
       <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
       <Route path='/bookdetail' element={<BookDetail></BookDetail>}></Route>
       <Route path='/cart' element={<ProtectedRoute Component={CartPage}></ProtectedRoute>}></Route>
      </Routes>
    </Router>
    // <div className="App">
    //   <Navbar></Navbar>
    //   <BookList></BookList>
    //   <RegisterPage></RegisterPage>
    //   <LoginPage></LoginPage>
    // </div>
  );
}

export default App;
