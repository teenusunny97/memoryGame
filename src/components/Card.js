const Card=({item,handleClick,index})=>{
    const itemClass=item.stat?" active " + item.stat:""
    return(
        <div className={"card"+itemClass} onClick={()=>handleClick(index)}>
           <img src={item.img} alt="img" />
        </div>
       
    )
}
export default Card