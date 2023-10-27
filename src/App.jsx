import { Routes, Route} from "react-router-dom";
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArticlesContainer from './components/ArticlesContainer'
import UsersContainer from './components/UsersContainer'
import ArticleContainer from './components/ArticleContainer';
import TopicsContainer from './components/TopicsContainer';

function App() {

  return (
    <>
      <Header/>
      <NavBar/>
      <Routes>
      < Route path="/articles" element={<ArticlesContainer />} />
      < Route path="/account" element={<UsersContainer />} />
      < Route path="/topics" element={<TopicsContainer />} />
      < Route path="/articles/:article_id" element={<ArticleContainer />} />
      </Routes>
    </>
  )
}

export default App
