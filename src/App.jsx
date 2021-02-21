import './App.css';
import { CardContainer } from "./components/Card/CardContainer";
import { BrowserMenu } from './features/Header/BrowserMenu';
import { Header } from './features/Header/Header';
import { connect } from 'react-redux';
import { fetchPosts } from './store/actions'; 
import SharedButton from './features/Post/Button';
import Card from './components/Card/Card';
import { useSelector } from 'react-redux';

function App(props) {
  
  function fetch() {
    props.fetchPosts();
  }

  const configButton = {
    buttonText: 'Press for posts',
    emitEvent: fetch
  }

  const posts = useSelector(state => state.getPosts)

  return (
    <div data-test='appComponent' className="App" id="App">
      <Header />
      <BrowserMenu className="browserMenu" />
      {posts.length === 0 && 
        <SharedButton {...configButton} />
      }  
      {posts.length > 0 &&
        <div>
          {posts.map((post, index) => {
            const { title, body } = post;
            const configCard = {
              title,
              post: body
            };
            return (
              <Card key={index} {...configCard}/>
            )
          })}
        </div>
      }
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
