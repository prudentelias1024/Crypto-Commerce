import {  useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Register from './Register';
import Login from './Login';
import { SearchContextAPI } from './Contexts/SearchContextAPI';
import AddProduct from './AddProduct';
import Dashboard from './Dashboard';


const  App = () => {
  useEffect(() =>{
  }, [])
  
  const [search, setSearch] = useState('')
   
  return (
    <SearchContextAPI.Provider value={{search,setSearch}}>

<Router>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<Products/>} caseSensitive={false} />
       <Route path='/login' element={<Login/>} caseSensitive={false} />
       <Route path='/register' element={<Register/>} caseSensitive={false} />
       <Route path='/addProduct' element={<AddProduct/>} caseSensitive={false} />
       <Route path='/dashboard' element={<Dashboard/>} caseSensitive={false} />

      </Routes>
    
    </Router>c
</SearchContextAPI.Provider>
  );
  }

export default App;