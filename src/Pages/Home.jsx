import Navbar from '../Navbar'
import Body from '../Body';
import Hero from '../Hero';
import Footer from '../Footer'
import FewProducts from '../FewProducts'
const Home = (loggedIn) => {
  
 loggedIn = false;
   return (
    <div className='natively'>
   
    <Hero/>
    <Body/>
     <FewProducts buyable={loggedIn}/>
    <Footer/>
    </div>
 )
}
export default Home