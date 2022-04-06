import Loader from "../../animation/Loader";
import { TitleClean, TitleSection } from "../../styles/title"
import Card from "./Card";
import { Swiper } from "../../dashboard/portfolio/Swiper";
import { SwiperSlide } from "swiper/react";
import { useLoadPortfolio } from "../../hooks/useCrudPortfolio";
import { ContainerApp } from "../../styles";
import Spring from "../../animation/Spring";

const Portolio = () => {
   const { data: portfolios, isLoading } = useLoadPortfolio();

   return (
      <ContainerApp>
         <TitleSection margin>Proyectos</TitleSection>
         {
            isLoading
               ? <Loader />
               : portfolios.length !== 0
                  ?  <Spring>
                        <Swiper>{
                           portfolios.map(portfolio => (
                              <SwiperSlide key={portfolio.id} className="portfolio__card">
                                 <Card {...portfolio} />
                              </SwiperSlide>
                           ))
                        }</Swiper>
                     </Spring>
                  :  <TitleClean>No hay proyectos que mostrar</TitleClean>
         }
      </ContainerApp>
   )
}

export default Portolio