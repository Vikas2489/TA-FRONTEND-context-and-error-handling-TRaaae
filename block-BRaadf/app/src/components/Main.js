import Banner from './Banner';
import Cards from './Cards';
import Paragraph from './Paragraph';
import Title from './Title';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Main(props) {
  let isDarkMode = useContext(ThemeContext);
  return (
    <>
      <Title text="Text Component" isDarkMode={isDarkMode} />
      <Paragraph isDarkMode={isDarkMode} />
      <Title text="Card Component" isDarkMode={isDarkMode} />
      <Cards />
      <Title text="Banner Component" isDarkMode={isDarkMode} />
      <Banner isDarkMode={isDarkMode} />
    </>
  );
}

export default Main;
