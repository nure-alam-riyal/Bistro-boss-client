import ScetionTitle from "./ScetionTitle";
import feactures from '../assets/assets/home/featured.jpg'
import Button from "./Button";

const FromMenuSection = () => {
    return (
        <div className="bg-homeSection5 bg-fixed bg-cover  bg-center">
            <div className=" bg-black  bg-opacity-40 py-5 text-white">
            <div>
                <ScetionTitle heading={ 'FROM OUR MENU'} subHeading={'Check it out'}></ScetionTitle>
                <div className="flex  gap-10 w-10/12 mx-auto">
                    <div>
                       <img src={feactures} alt="" />
                    </div>
                    <div >
                          <h4 className="text-lg">March 20,2025</h4>
                          <h2 className="uppercase text-xl">Wher can I get some?</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ducimus laborum neque dignissimos quis eligendi quidem necessitatibus distinctio ex quam dolore ratione optio perferendis cupiditate non, facilis sapiente nihil? Id tenetur doloribus nesciunt ab perspiciatis voluptatum nisi asperiores molestias quisquam?</p>
                          <Button words={'Read More'}></Button>
                    </div>
                   
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default FromMenuSection;