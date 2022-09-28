import P from 'prop-types';
import * as Styled from './styles';
import whatsapp from "./whatsapp.png";

export const Whatsapp = () => {
  return (
    <>
    <Styled.Container href="https://api.whatsapp.com/send?phone=554735316000" aria-label="Whatsapp" title="Whatsapp" target="_blank">
     <img src={whatsapp} alt="whatsapp"/>
    </Styled.Container>
    </>
  )
};

