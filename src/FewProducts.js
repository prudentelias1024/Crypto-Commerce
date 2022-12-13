import HomeProducts from './HomeProducts';
const FewProducts = (buyable) => {
 

return(
    <>
  <p className="benefits__heading mt-24 mb-10  text-black text-5xl font-bold text-center ">
            Our Top Products
            </p>
   <div className="fewproduct grid-cols-3 gap-8 mb-40 md:gap-10  md:grid px-6 ">
    <HomeProducts buyable={buyable} name="Vintage Shirt" size="M" description="For Men and Women." dateUploaded="Aug 19" owner="Larry Page"/>
    <HomeProducts buyable={buyable} name="Vintage Shirt" size="M" description="For Men and Women." dateUploaded="Aug 19" owner="Larry Page"/>
    <HomeProducts buyable={buyable} name="Vintage Shirt" size="M" description="For Men and Women." dateUploaded="Aug 19" owner="Larry Page"/>
    <HomeProducts buyable={buyable} name="Vintage Shirt" size="M" description="For Men and Women." dateUploaded="Aug 19" owner="Larry Page"/>
    <HomeProducts buyable={buyable} name="Vintage Shirt" size="M" description="For Men and Women." dateUploaded="Aug 19" owner="Larry Page"/>
    <HomeProducts buyable={buyable} name="Vintage Shirt" size="M" description="For Men and Women." dateUploaded="Aug 19" owner="Larry Page"/>
   </div>
    </>
);
}
export default FewProducts;