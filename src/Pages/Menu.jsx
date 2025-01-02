import MenuCetagory from "../Components/MenuCetagory";
import pizza from '../assets/assets/menu/pizza-bg.jpg'
import desert from '../assets/assets/menu/dessert-bg.jpeg'
import salad from '../assets/assets/menu/salad-bg.jpg'
import Soup from '../assets/assets/menu/soup-bg.jpg'
import banner from '../assets/assets/menu/banner3.jpg'
import useMenu from "../Hooks/useMenu";
import CetagoryCover from "../Components/CetagoryCover";
import ScetionTitle from "../Components/ScetionTitle";
import MenuItems from "../Components/MenuItems";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Menu = () => {
    const {menu}=useMenu()
   
    const pizzaItem=menu?.filter(item=>item.category==="pizza")
    const dessertItem=menu?.filter(item=>item.category==="dessert")
    const saladItem=menu?.filter(item=>item.category==="salad")
    const soupItem=menu?.filter(item=>item.category==="soup")
    const offerItem=menu?.filter(item=>item.category==="offered")
    return (
        <div>
            <CetagoryCover img={ banner } title={'OUR MENU'} titleDescription={'Would you like to try a dish?'}> </CetagoryCover>
            <ScetionTitle heading={'Today`s Offer'} subHeading={'Don`t Miss'}></ScetionTitle>
            <MenuItems items={offerItem}></MenuItems>
          <Link to={`/shop/offered`}>  <Button words={'ORDER YOUR FAVOURITE FOOD'}></Button></Link>
            <MenuCetagory
             item={dessertItem} words={'ORDER YOUR FAVOURITE FOOD'}
             title={'desserts'} 
             titleDescription={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
             img={desert}></MenuCetagory>
            <MenuCetagory
             item={pizzaItem} words={'ORDER YOUR FAVOURITE FOOD'}
             title={'pizza'} 
             titleDescription={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
             img={pizza}></MenuCetagory>
            <MenuCetagory
             item={saladItem} words={'ORDER YOUR FAVOURITE FOOD'}
             title={'salads'} 
             titleDescription={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
             img={salad}></MenuCetagory>
            <MenuCetagory
             item={soupItem} words={'ORDER YOUR FAVOURITE FOOD'}
             title={'soups'} 
             titleDescription={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
             img={Soup}></MenuCetagory>
             
            
        </div>
    );
};

export default Menu;