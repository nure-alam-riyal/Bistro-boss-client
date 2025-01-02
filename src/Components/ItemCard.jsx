

const ItemCard = ({item}) => {
    const  {name, recipe, image, category, price}=item || {}
    console.log(item)
    return (
        <div className="card rounded-none bg-base-100  shadow-xl">
  <figure className=" ">
    <img 
      src={image}
      alt="Shoes"
      className=" w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
    <div className='flex justify-center '>
           <button className='btn font-semibold text-xl mt-4 border-b-4 border-b-yellow-400 text-yellow-400 hover:bg-black'>add to cart</button> 
        </div>
    </div>
  </div>
</div>
    );
};

export default ItemCard;