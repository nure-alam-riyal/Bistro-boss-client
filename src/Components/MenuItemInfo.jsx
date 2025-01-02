

const MenuItemInfo = ({items1}) => {
    const {category, price,
        image,
        recipe,name
    }=items1 || {}

    return (
        <div>
            <div className="flex gap-4">
                <div><img referrerPolicy="no-referrer" className="w-[120px] h-[100px] rounded-tl-none rounded-[200px]" src={image} alt="" /></div>
                <div>
                    <h3 className="font-bold  text-2xl">{name}-------------</h3>
                    <p >{recipe}</p>
                </div>
                <div className="text-yellow-400">${price}</div>
            </div>
        </div>
    );
};

export default MenuItemInfo;