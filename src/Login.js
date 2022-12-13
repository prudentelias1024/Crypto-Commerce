import { Link } from "react-router-dom";
const Login = () => {
 return(
    <div className="login px-4">
      
    <form className="form w-full p-6 mb-16 md:w-1/3 md:p-10 mt-32 md:ml-96 md:-mr-10  form__border flex flex-col gap-8">
    <div className="logo">
          <p className="app__name text-center text-black font-bold text-2xl -mt-2">
          Natively
          </p>
        </div>
        <div className="input__container">
        <input type="text" name="usernameorname" className="input  w-full font-[Mulish] rounded-md " placeholder="Username / Email"/>
        </div>
        <div className="input__container">
        <input type="password"name="password" className="input  w-full font-[Mulish] rounded-md " placeholder="Password "/>
        </div>
        
        <div className="input__container flex flex-column">
        <p className="text-[dodgerblue] font-[Mulish] font-bold">Forgot Password? </p>
        <Link to="/register" className="text-[dodgerblue] font-[Mulish] font-bold">Already Registered </Link>
        </div>
        
        <div className="input__container">
        <button className="input  w-full font-[Mulish] bg-[#512bd4] text-white rounded-md">Login</button>
        </div>
    </form>
    </div>
 );
}
export default Login