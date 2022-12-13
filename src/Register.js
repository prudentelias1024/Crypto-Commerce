import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div className="login px-5 ">
      
        <form className="form w-full mb-16 p-6 mt-20 md:w-1/3 md:p-10 md:ml-96 md:-mr-10  form__border flex flex-col gap-8">
        <div className="logo">
              <p className="app__name text-center text-black font-bold text-2xl -mt-2">
              Natively
              </p>
            </div>

            <div className="input__container">
            <input type="file"className="input  w-full font-[Mulish] rounded-md" />
            </div>
           
            <div className="input__container">
            <input type="text"  name="first__name" className="input  w-full font-[Mulish] rounded-md " placeholder="First Name"/>
            </div>
           
            <div className="input__container">
            <input type="text"  name="last__name" className="input  w-full font-[Mulish] rounded-md " placeholder="Last Name "/>
            </div>
           
            <div className="input__container">
            <input type="text"  name="email" className="input  w-full font-[Mulish] rounded-md " placeholder="E-mail"/>
            </div>
            <div className="input__container">
            <input type="text" name="phonenumber" className="input  w-full font-[Mulish] rounded-md " placeholder="Phone Number"/>
            </div>
            
            <div className="input__container">
            <input type="password" name="password1"className="input  w-full font-[Mulish] rounded-md " placeholder="Password"/>
            </div>

            <div className="input__container">
            <input type="password" name="password2" className="input  w-full font-[Mulish] rounded-md " placeholder="Confirm Password"/>
            </div>
          
            <div className="input__container flex flex-column">        
        <Link to="/login" className="text-[dodgerblue] font-[Mulish] font-bold"> Already a user? Login</Link>
        </div>
        
            <div className="input__container">
            <button className="input  w-full font-[Mulish] bg-[#512bd4] text-white rounded-md">Register</button>
            </div>

          
        </form>
        </div>
    );

}

export default Register;