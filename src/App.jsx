import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles.styles';
import Router from './Router';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
