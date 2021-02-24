import './App.css';
import CardContainer from "./components/CardContainer";
import { Header } from './features/Header/Header';
import { connect } from 'react-redux';
import { fetchPosts } from './store/actions'; 
import { store } from './store';


function App(props) {
  
  // **Usage for Sharedbutton has been disabled 
  //function fetch() {
  //   props.fetchPosts();
  // }

  // const configButton = {
  //   buttonText: 'Press for posts',
  //   emitEvent: fetch
  // }

  // {posts.length === 0 && 
  //   <SharedButton {...configButton} />
  // }  

  function fetch () {
    store.dispatch(fetchPosts('/r/ASX_bets.json'))
  }


  return (
    <div data-test='appComponent' className="App" id="App" onClick={fetch}>
      <Header />
      
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
