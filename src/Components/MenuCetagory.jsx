import { Link } from "react-router-dom";
import Button from "./Button";
import CetagoryCover from "./CetagoryCover";
import MenuItems from "./MenuItems";


const MenuCetagory = ({item,words,title,titleDescription,img}) => {
    // console.log(title)
    return (
        <div>
            <CetagoryCover title={title} titleDescription={titleDescription} img={img}></CetagoryCover>
            <MenuItems items={item}></MenuItems>
           <Link to={`/shop/${title}`}><Button words={words}></Button></Link>
        </div>
    );
};

export default MenuCetagory;