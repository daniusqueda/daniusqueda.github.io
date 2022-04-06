import { useSelector, useDispatch } from "react-redux";
import { AiOutlineUser, AiOutlineLink } from 'react-icons/ai'
import Loader from "../../animation/Loader";
import { FaSave } from 'react-icons/fa'
import { MdUpdate } from 'react-icons/md'
import { BsPencil } from 'react-icons/bs'
import { Input } from "../../styles/input"
import { Form } from "../../styles";
import { TitleClean, TitleSection } from "../../styles/title"
import { Button } from "../../styles/button";
import Banner from "../../styles/banner";
import Spinner from "../../animation/Spinner";
import { clearPortfolioActive, portfolioActive } from "../../state/slices/portfolioSlice";
import Card from "./Card";
import { Swiper } from "./Swiper";
import { SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import useFormCrud from "../../hooks/useFormCrud";
import { useAddPortfolio, useLoadPortfolio, useUpdatePortfolio } from "../../hooks/useCrudPortfolio";
import Spring from "../../animation/Spring";

const Portolio = () => {
   const dispatch = useDispatch();
   const active = useSelector(state => state.portfolio.active);
   const [{ name, description, link }, setForm, handleInput, reset, resetInputs] = useFormCrud({ name: '', description: '', link: '' });
   const { data: portfolios, isLoading } = useLoadPortfolio();
   const { mutate: addPortfolio, isLoading: loadingAdd } = useAddPortfolio();
   const { mutate: updatePortfolio, isLoading: loadingUpdate } = useUpdatePortfolio();

   useEffect(() => {
      if (active) {
         setForm(active);
      } else {
         resetInputs();
      }
   }, [active])

   const handleSubmit = e => {
      e.preventDefault();
      if (active) {
         updatePortfolio({ id: active.id, name, description, link }, {
            onSuccess: () => dispatch(clearPortfolioActive())
         })
      } else {
         addPortfolio({ name, description, link }, {
            onSuccess: (data) => dispatch(portfolioActive(data))
         })
      }
   }

   return (
      <>
         <Banner>{
            isLoading
               ? <Loader />
               : portfolios.length !== 0
                  ? <Spring>
                        <Swiper>{
                           portfolios.map(portfolio => (
                              <SwiperSlide key={portfolio.id} className="portfolio__card">
                                 <Card {...portfolio} />
                              </SwiperSlide>
                           ))
                        }</Swiper>
                    </Spring>
                  : <TitleClean>Ingresa tus proyectos</TitleClean>
         }</Banner>
         <Form onSubmit={handleSubmit}>
            <TitleSection>Cuales son tus proyectos?</TitleSection>
            <Input
               type="text"
               icon={<AiOutlineUser />}
               name="name"
               value={name}
               label="Nombre"
               onChange={handleInput}
               reset={reset}
            />
            <Input
               type="text"
               icon={<BsPencil />}
               name="description"
               value={description}
               label="Descripcion"
               onChange={handleInput}
               reset={reset}
            />
            <Input
               type="text"
               icon={<AiOutlineLink />}
               name="link"
               value={link}
               label="Link (opcional)"
               onChange={handleInput}
               reset={reset}
            />
            {active
               ? <Button margin> {loadingUpdate ? <Spinner /> : <MdUpdate />} Actualizar</Button>
               : <Button margin> {loadingAdd ? <Spinner /> : <FaSave />} Guardar</Button>}
         </Form>
      </>
   )
}

export default Portolio