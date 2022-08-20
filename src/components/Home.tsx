import Logo from 'assets/dani_512_512.png';
import Banner0 from 'assets/banner0.jpeg';
import Banner1 from 'assets/banner1.jpeg';
import Banner2 from 'assets/banner2.jpeg';
import Banner3 from 'assets/banner3.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './home.css';

export function Home() {
  return (
    <article className="bg-white w-full my-3">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={Banner0} alt="logo" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Banner1} alt="logo" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Banner2} alt="logo" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Banner3} alt="logo" />
        </SwiperSlide>
      </Swiper>

      <h1 className="my-3 text-2xl">Daniela Nascimento</h1>
      <p className="my-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis eum illum a dolores
        impedit necessitatibus expedita possimus quis cum deleniti dolor et velit assumenda
        voluptatibus, exercitationem quisquam id suscipit odio!
      </p>
    </article>
  );
}
