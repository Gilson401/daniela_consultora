import Logo from 'assets/dani_512_512.png';
import Banner0 from 'assets/banner0.jpeg';
import Banner1 from 'assets/banner1.jpeg';
import Banner2 from 'assets/banner2.jpeg';
import Banner3 from 'assets/banner3.jpeg';

import './home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function Home() {
  return (
    <article className="bg-white w-full my-3">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%',
          }}
          src={Banner0}
          alt="logo"
        />

        <img src={Banner1} alt="logo" />

        <img src={Banner2} alt="logo" />

        <img src={Banner3} alt="logo" />
      </Carousel>

      <h1 className="my-3 text-2xl">Daniela Nascimento</h1>
      <p className="my-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis eum illum a dolores
        impedit necessitatibus expedita possimus quis cum deleniti dolor et velit assumenda
        voluptatibus, exercitationem quisquam id suscipit odio!
      </p>
    </article>
  );
}
