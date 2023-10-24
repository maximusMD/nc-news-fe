import './App.css'
import { Routes, Route} from "react-router-dom";
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArticlesContainer from './components/ArticlesContainer'
import UsersContainer from './components/UsersContainer'
import ArticleContainer from './components/ArticleContainer';

function App() {

  return (
    <>
      <Header/>
      <NavBar/>
      <Routes>
      < Route path="/articles" element={<ArticlesContainer />} />
      < Route path="/users" element={<UsersContainer />} />
      < Route path="/articles/:article_id" element={<ArticleContainer />} />
      </Routes>
    </>
  )
}

export default App

      {/* <Route path="/topics" element={
        <div>
          <h1>Topics</h1>
          <ul>
            <li><Link to="/topic1">Topic 1</Link></li>
            <li><Link to="/topic2">Topic 2</Link></li>
          </ul>
        </div>}/> */}
