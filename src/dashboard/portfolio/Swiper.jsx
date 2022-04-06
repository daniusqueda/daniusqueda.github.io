import { Swiper as SwiperContainer } from "swiper/react";
import 'swiper/css';
import { EffectCoverflow, Pagination } from "swiper";

export const Swiper = ({ children }) => {
  return (
      <SwiperContainer
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {children}
      </SwiperContainer>
  );
};
