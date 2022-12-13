import Product1 from './hero.jpg'
import ProfilePic from './joke.png'

const HomeProducts = ({name,price,size,description,owner,image, buyable}) => {
    return(
        <div className="product h-fit  mb-10 flex flex-col">
        <img src={image} alt={image} className='w-full  rounded-tl-xl rounded-tr-xl p-5' />
        <div className="card flex flex-col gap-4 "> 
        <p className="product__name font-bold text-4xl text-center">
            {name}
        </p>
        <p className="product__size text-xl font-bold ml-10">Size: {size}</p>
        <p className="product__size text-xl font-bold ml-10">Price: ${price}</p>
        <p className="product__short__text font-light text-xl ml-10">{description} </p>
        {/* <button className="w-1/2 bg-[#512bd4] text-white px-4 py-2 font-bold ml-16 "> Buy</button> */}
        <div className="product__owner flex flex-row gap-3 align-middle">
          <img src={ProfilePic} alt={ProfilePic} className="product__owner mt-2 h-9 w-9 ml-5 mb-5 rounded-full object-cover"/>
         <div className='flex flex-col'>
          <a href="/" className="product__seller text-xl font-bold">Prudent Elias</a>
          <p className="uploaded__on text-base font-[Mulish] -mt-1">Aug 19</p>
         </div>
        </div>
    </div>
      {buyable ?<button className='buy mb-[2em] w-[4/6] mt-[1em] ml-[1em]'>Buy</button>:
      ''
      }

   </div>
    );

}
export default HomeProducts;