import Home from "./pages/Home";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {GlobalProvider} from './context/globalContext';

const App = () => {
  return <GlobalProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/:id" element={<Home props={null}/>} />
   </Routes>
    </BrowserRouter>
  </GlobalProvider>
}

export default App;
