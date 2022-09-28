import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Whatsapp } from '../../components/Whatsapp';

export const Base = ({ links, logoData, footerHtml, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window && window.scrollTo(0, 0);
  };

  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <Whatsapp />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
