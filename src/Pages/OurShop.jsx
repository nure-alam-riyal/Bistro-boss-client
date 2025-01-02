import React, { useState } from 'react';
import CetagoryCover from '../Components/CetagoryCover';
import banner from '../assets/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemCard from '../Components/ItemCard';
import useMenu from '../Hooks/useMenu';
import { useParams } from 'react-router-dom';

const OurShop = () => {
 const category1=['salads','pizza','soups','desserts','drinks','offered']
 const {category}=useParams()
 const newIndex=category1.indexOf(category) 
 
    const [tabIndex, setTabIndex] = useState(newIndex);
    const { menu } = useMenu()
    const pizzaItem=menu?.filter(item=>item.category==="pizza")
    const dessertItem=menu?.filter(item=>item.category==="dessert")
    const saladItem = menu?.filter(item => item.category === "salad")
    const soupItem=menu?.filter(item=>item.category==="soup")
    const drinkItem=menu?.filter(item=>item.category==="drinks")
    const offeredItem=menu?.filter(item=>item.category==="offered")
    // console.log(saladItem)
    return (
        <div>
            <CetagoryCover img={banner} title={'OUR SHOP'} titleDescription={'Would you like to try a dish?'}> </CetagoryCover>
            <div className='flex justify-center text-center my-6' >
                <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='uppercase'>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                        <Tab>offered</Tab>

                    </TabList>

                    <TabPanel>

                        <div className="grid md:grid-cols-3 my-5 gap-12">
                            {
                                saladItem?.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-3 my-5 gap-12">
                            {
                                pizzaItem?.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-3 my-5 gap-12">
                            {
                                soupItem?.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-3 my-5 gap-12">
                            {
                                dessertItem?.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-3 my-5 gap-12">
                            {
                                drinkItem?.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-3 my-5 gap-12">
                            {
                                offeredItem?.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;