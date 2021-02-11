import './App.css';
import { CardContainer } from "./components/Card/CardContainer";
import { BrowserMenu } from './features/Header/BrowserMenu';
import { Header } from './features/Header/Header';
import { connect } from 'react-redux';
import { fetchPosts } from './store/actions'; 
import SharedButton from './features/Post/Button';

function App(props) {
  
  function fetch() {
    props.fetchPosts();
  }

  const config = {
    buttonText: 'Press for posts',
    emitEvent: fetch
  }

  return (
    <div className="App" id="App">
      <Header />
      <BrowserMenu className="browserMenu" />
      <SharedButton {...config} />
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
