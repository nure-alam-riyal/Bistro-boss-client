import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../assets/assets/home/slide1.jpg'
import slide2 from '../assets/assets/home/slide2.jpg'
import slide3 from '../assets/assets/home/slide3.jpg'
import slide4 from '../assets/assets/home/slide4.jpg'
import slide5 from '../assets/assets/home/slide5.jpg'
import ScetionTitle from './ScetionTitle';

const HomeCategorySectrion = () => {
    return (
        <div className='my-20'>
            <ScetionTitle heading='ORDER ONLINE' subHeading='From 11:00am to 10:00pm'></ScetionTitle>
             <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" /><p className='uppercase -mt-24 py-4 font-semibold text-3xl opacity-75 text-center'>Salads</p></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /><p className='uppercase -mt-24 py-4 font-semibold text-3xl opacity-75 text-center'>Soups</p></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /><p className='uppercase -mt-24 py-4 font-semibold text-3xl opacity-75 text-center'>pizzas</p></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /><p className='uppercase -mt-24 py-4 font-semibold text-3xl opacity-75 text-center'>desserts</p></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /><p className='uppercase -mt-24 py-4 font-semibold text-3xl opacity-75 text-center'>ice</p></SwiperSlide>
       
      
      </Swiper>
        </div>
    );
};

export default HomeCategorySectrion;