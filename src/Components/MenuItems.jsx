import MenuItemInfo from "./MenuItemInfo";


const MenuItems = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 my-5 gap-12">
            {
                items?.map(item=><MenuItemInfo key={item._id} items1={item}></MenuItemInfo>)
            }
        </div>
    );
};

export default MenuItems;