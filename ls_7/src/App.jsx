
import './App.css'
import ListPage from './page/ListPage/ListPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import AboutPage from "./page/AboutPage/AboutPage.jsx"
import InfoPage from "./page/InfoPage/InfoPage.jsx"
import Layout from './Layout/Layout.jsx';
import InputDataPage from './page/InputDataPage/InputDataPage.jsx';
import InputOtherPage from './page/InputOtherPage/InputOtherPage.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" 
          element={<ListPage/>} />
          <Route path="/about" 
          element={<AboutPage/>} />
          <Route path="/info" 
          element={<InfoPage/>} />
        </Route>

        <Route path="/input_main" 
        element={<InputDataPage/>} />
        <Route path="/input_other/:name/:f_name" 
        element={<InputOtherPage/>} />

        <Route path="*" 
        element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App
