import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Button } from "../../styles/button"
import { useRemovePortfolio } from "../../hooks/useCrudPortfolio";
import { portfolioActive, clearPortfolioActive } from "../../state/slices/portfolioSlice";
import { Description, SubTitle } from "../../styles/title";
import { Buttons } from "../../styles/education";
import Spinner from "../../animation/Spinner";
import File from "../../styles/file";
import { useAddImagePortfolio } from "../../hooks/useCrudPortfolio";
import styled from 'styled-components';

const Card = ({ id, img, name, description, link }) => {
  const dispatch = useDispatch();
  const active = useSelector(state => state.portfolio.active);
  const { mutate: removePortfolio, isLoading: loadingRemove } = useRemovePortfolio();
  const { mutate: addImagePortfolio, isLoading: loadingImg } = useAddImagePortfolio();

  const handleEdit = () => {
    dispatch(portfolioActive({ id, img, name, description, link }))
  }

  const handleRemove = () => {
    removePortfolio(id);
    dispatch(clearPortfolioActive());
  }

  const handleImage = (e) => {
    const file = new FormData()
    file.append('file', e.target.files[0])
    addImagePortfolio({ id, file }, {
      onSuccess: () => dispatch(clearPortfolioActive())
    })
  }

  return (
    <ContainerCard>
      {loadingImg ? <Center><Spinner /></Center> : <Img src={img} alt={name} onClick={handleEdit} />}
      {!loadingImg && active && active.id === id &&
        <BodyCard>
          <SubTitleCard>{name}</SubTitleCard>
          <DescriptionCard smaill>{description}</DescriptionCard>
          <DescriptionCard smaill>{link}</DescriptionCard>
          <Button color="red" onClick={handleRemove}>{loadingRemove ? <Spinner /> : <AiFillDelete />} Eliminar</Button>
          <File text="Agregar imagen" onChange={handleImage} />
          <Button onClick={() => dispatch(clearPortfolioActive())}>Cancelar</Button>
        </BodyCard>
      }
    </ContainerCard>
  )
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const BodyCard = styled(Buttons)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.6);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1em;
  align-items: stretch;
  flex-direction: column;
`;

const SubTitleCard = styled(SubTitle)`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DescriptionCard = styled(Description)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContainerCard = styled.div`
    position: relative;
`;

export default Card