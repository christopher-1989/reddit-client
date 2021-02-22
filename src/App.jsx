import './App.css';
import CardContainer from "./components/CardContainer";
import { Header } from './features/Header/Header';
import { connect } from 'react-redux';
import { fetchPosts } from './store/actions'; 
import SharedButton from './features/Post/Button';
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
      {posts.length === 0 && 
        <SharedButton {...configButton} />
      }  
      <CardContainer />
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
