import Footer from "./Footer";
import Navbar from "./Navbar";
import YourProduct from "./YourProduct";

const Dashboard = () => {
return(
    <>
    <Navbar/>
    <div className="dashboard">

    <div className="mb-[4em] grid grid-cols-4 gap-[1em] pr-[1em] pl-[1em] pt-[2em]">

    
        <div className="info  p-[1.8em] product bg-[#0076ff] text-white">
            <p className="no__of__sold__product">3</p>
            <p className="category">Products <br></br> Available</p>
        </div>

        <div className="info  p-[1.8em] product bg-[#512bd4] text-white">
            <p className="no__of__sold__product">3</p>
            <p className="category">Products <br></br> Sold</p>
        </div>

        <div className="info  p-[1.8em] product bg-[#0076ff] text-white">
            <p className="no__of__sold__product">3</p>
            <p className="category">Products <br></br> Bought</p>
        </div>
       
        <div className="info  p-[1.8em] product bg-[#0076ff] text-white">
            <p className="no__of__sold__product">3</p>
            <p className="category">Products <br></br> Delivered</p>
        </div>

        <div className="info  p-[1.8em] product bg-[#0076ff] text-white">
            <p className="no__of__sold__product">3</p>
            <p className="category">Ordered <br></br> Products</p>
        </div>

        <div className="info  p-[1.8em] product bg-[#0076ff] text-white">
            <p className="no__of__sold__product">3</p>
            <p className="category">Pending <br></br> Delivery</p>
        </div>
        <div className="info  p-[1.8em] product bg-[#0076ff] text-white">
            <p className="no__of__sold__product">3</p>
            <p className="category">Products <br></br> Delivered</p>
        </div>

        <div className="info  p-[1.8em] product bg-[#0076ff] text-white">
            <p className="no__of__sold__product">3</p>
            <p className="category">Products <br></br> Ordered</p>
        </div>


    </div>
    <div className="flex flex-col gap-[-1em]">

    <YourProduct  buyable={false} title="Products Available"/>
    <YourProduct buyable={false} title=" Products Sold"/>
    <YourProduct buyable={false} title="Products Bought"/>
    <YourProduct buyable={false} title="Product Delivered"/>
    <YourProduct buyable={false} title="Ordered Product"/>
    <YourProduct buyable={false} title="Pending Delivery"/>
    <YourProduct buyable={false} title="Product Delivered"/>
    </div>

    </div>

    <Footer/>
    </>
);
}
export default Dashboard