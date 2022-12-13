const Benefits = ({Icons, body}) => {
   
return(
    <div className="benefit text-center p-5  flex flex-col gap-5">
         <Icons className="self-center  text-[#512bd4] text-6xl "/>

        <p className="benefit__text text-2xl">{body}</p>
        </div>
);
}
export default Benefits;