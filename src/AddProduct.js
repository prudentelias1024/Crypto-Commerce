import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaPlus } from "react-icons/fa";
import YourProduct from "./YourProduct";
const AddProduct = () => {
return (
 <>
 
   <Navbar />
   <p className="text-3xl text-[Mulish] ml-[1.2em] mt-[2em] mb-[-1.5em]">Add New Product</p>
   <form className="grid grid-cols-3 grid-rows-1 mt-[3em] py-[1.5em] px-[1em] ml-[-1em] w-full  gap-[1em]">
  
  <div className="ml-[1em] product__box form__border flex flex-col  gap-[1em] px-[2em] py-[4.6em] align-center">
    <FaPlus className="add__icon" color="grey"/>
    <p className="text-grey thumbnail">Upload Product's Front View  </p>
  </div>
  
  <div className="ml-[1em] product__box  form__border ml-[-1.5em !important] flex flex-col gap-[1em] px-[2em] py-[4.6em]  align-center">
    <FaPlus className="add__icon" color="grey"/>
    <p className="text-grey thumbnail">Upload Product's Rear View  </p>
  </div>

  <div className="other__form__items w-full flex flex-col gap-[2em]">

  <div className="input__container">
        <input type="text" name="productName" className="input  w-full font-[Mulish] rounded-md " placeholder="Product Name"/>
        </div>
  <div className="input__container">

        <input type="text" name="productSize" className="input  w-full font-[Mulish] rounded-md " placeholder="Product Size"/>
        </div>
  <div className="input__container">
        <input type="text" name="productAmount" className="input  w-full font-[Mulish] rounded-md " placeholder="Product Amount"/>
        </div>
  <div className="input__container">
        <input type="text" name="productDescription" className="input  w-full font-[Mulish] rounded-md " placeholder="Product Description"/>
        </div>
  </div>
  <button type="submit" className="add__product 
     bg-[#512bd4] rounded-full p-[1em] text-white ml-[1.5em]">
        Add Product</button>

    </form>
   
  
  <YourProduct title="Your Products"/>
  <Footer/>
 </>
);

}
export default AddProduct;