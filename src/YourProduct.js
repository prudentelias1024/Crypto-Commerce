import HomeProducts from "./HomeProducts";

const YourProduct = ({title, buyable}) => {
return(
    <>
    <div className="user__product flex flex-col gap-[1em]">
     <div className="heading ml-[1em] my-[2em]">
        <p className="text-[Mulish] text-3xl ml-[1em]">{title}</p>
     </div>
     <div className="products grid-cols-3 gap-8 mb-40 md:gap-10  md:grid px-6 ">
      <HomeProducts buyable={buyable}/>
      <HomeProducts buyable={buyable}/>
      <HomeProducts buyable={buyable}/>
    
 
 </div>
    </div>
    </>
);
}

export default YourProduct