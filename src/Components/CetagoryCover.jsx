
import { Parallax } from 'react-parallax';
const CetagoryCover = ({title,titleDescription,img}) => {
    // console.log(title)
    return (
        <Parallax blur={1} bgImage={img} bgImageAlt="the cat" strength={200}>
        
  
        <div className="h-[500px] flex justify-center mb-20 text-center text-white items-center bg-cover bg-center" >
            <div className="w-7/12 flex justify-center bg-black bg-opacity-60 py-10">
                <div className="w-8/12">
                    <h1 className="font-bold my-4 uppercase text-3xl">{title}</h1>
                    <p>{titleDescription}</p>
                </div>
            </div>
        </div>
        </Parallax>
    );
};

export default CetagoryCover;