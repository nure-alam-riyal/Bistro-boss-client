import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
  axios.get('http://localhost:1504/menu').then(res=>setMenu(res.data))
    },[])
    return {menu}
       
};

export default useMenu;