import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Userhome from './Components/Userhome';
import HomeCrud from './Components/HomeCrud';
import Signup from './Components/Signup';
import ViewUser from './Components/ViewUser';
import UpdateUser from './Components/UpdateUser';
import Protect from './Components/Protect';
import DeleteUser from './Components/DeleteUser';
import AddProduct from './Components/AddProduct';
import ViewProducts from './Components/ViewProducts';
import EditProduct from './Components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeCrud></HomeCrud>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/userhome' element={<Protect Child={Userhome}/>}></Route>
        <Route path='/viewuser' element={<Protect Child={ViewUser}/>}></Route>
        <Route path='/updateuser' element={<Protect Child={UpdateUser}/>}></Route>
        <Route path='/deleteuser' element={<Protect Child={DeleteUser}/>}></Route>
        <Route path='/addproduct' element={<Protect Child={AddProduct}/>}></Route>
        <Route path='/viewproducts' element={<Protect Child={ViewProducts}/>}></Route>
        <Route path='/editproduct' element={<Protect Child={EditProduct}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
