import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ cards }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-[20px] text-center">
                    <div className="mt-[15px]">
                        <h3 className='m-0 font-bold text-[40px] font-poppins'>{card.title}</h3>
                        <p className='m-[10px 0 0] text-[1em] font-roboto'>{card.description}</p>
                        <p className='mt-4 font-medium text-[1em] font-roboto'>{card.name}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
