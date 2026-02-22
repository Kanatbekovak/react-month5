
import './App.css'
import ListPage from './page/ListPage/ListPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import AboutPage from "./page/AboutPage/AboutPage.jsx"
import InfoPage from "./page/InfoPage/InfoPage.jsx"
import Layout from './Layout/Layout.jsx';
import InputDataPage from './page/InputDataPage/InputDataPage.jsx';
import InputOtherPage from './page/InputOtherPage/InputOtherPage.jsx';
import LayoutDz from './LayoutDz/LayoutDz.jsx';
import MainPage from './page/MainPage/MainPage.jsx';
import NotFoundDzPage from './page/NotFoundDzPage/NotFoundDzPage.jsx';
import MyPostsPage from './page/MyPostsPage/MyPostsPage.jsx';
import MyAboutPage from './page/MyAboutPage/MyAboutPage.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import { lazy } from 'react';

function App() {

  // const MainPage = lazy(() => import('./page/MainPage'));
  // const MyPostsPage = lazy(() => import('./page/MyPostsPage'));
  // const MyAboutPage = lazy(() => import('./page/MyAboutPage'));

  const MainPage = lazy(() => import('./page/MainPage/MainPage.jsx'));
  const MyAboutPage = lazy(() => import('./page/MyAboutPage/MyAboutPage.jsx'));
  const MyPostsPage = lazy(() => import('./page/MyPostsPage/MyPostsPage.jsx'));
  const PostDetail = lazy(() => import('./components/PostDetail/PostDetail.jsx'));
  const NotFoundDzPage = lazy(() => import('./page/NotFoundDzPage/NotFoundDzPage.jsx'));

  return (
    <>
      {/* <Routes>
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
      </Routes> */}
      <Routes>
        <Route element={<LayoutDz/>}>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about_me' element={<MyAboutPage/>}/>
          <Route path='/posts' element={<MyPostsPage/>}/>
          <Route path="posts/:id" element={<PostDetail/>} />
        </Route>
        <Route path='*' element={<NotFoundDzPage/>}/>
      </Routes>
    </>
  )
}

export default App
