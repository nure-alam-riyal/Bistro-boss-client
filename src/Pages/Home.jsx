import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import HomeCategorySectrion from '../Components/HomeCategorySectrion';
import ScetionTitle from '../Components/ScetionTitle';
import MenuItems from '../Components/MenuItems';
import useMenu from '../Hooks/useMenu';
import Button from '../Components/Button';
import FromMenuSection from '../Components/FromMenuSection';
import ItemCard from '../Components/ItemCard';

const Home = () => {
    const {menu}=useMenu()
   
    const popularItem=menu?.filter(item=>item.category==="popular")
    // console.log(menu)
    return (
        <div>
           <HomeBanner></HomeBanner>
           <HomeCategorySectrion></HomeCategorySectrion>
           <div className='bg-homeSection3  bg-cover bg-fixed flex justify-center items-center bg-center h-screen'>
                         <div className='text-center flex justify-center w-9/12 items-center py-20 bg-white '>
                            <div className='w-7/12 '>
                            <h2 className='text-4xl font-bold'>Bistro Boss</h2>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                            </div>
                         </div>
           </div>
           <ScetionTitle heading='FROM OUR MENU' subHeading='Check it out'></ScetionTitle>
           <MenuItems items={popularItem}></MenuItems>
           <Button words={'View Full  Menu'}></Button>
           <div className='my-20'>
            <div className='h-[250px] flex  items-center justify-center bg-black'>
                <p className='font-semibold text-white text-center w-6/12 text-4xl'>Call Us: +88 0192345678910</p>

            </div>
           </div>
           <ScetionTitle heading={'CHEF RECOMMENDS'} subHeading='Should Try'></ScetionTitle>
           {/* <ScetionTitle heading={'CHEF RECOMMENDS'} subHeading={'Should Try'}></ScetionTitle> */}
           <div className="grid md:grid-cols-3 my-10 gap-12">
                            {
                                menu?.slice(0,3).map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                            }
                        </div>
            
            <FromMenuSection></FromMenuSection>
        </div>
    );
};

export default Home;