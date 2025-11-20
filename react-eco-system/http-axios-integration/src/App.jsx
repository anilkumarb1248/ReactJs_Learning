
import './App.css'
import AsyncAwaitDemos from './components/AsyncAwaitDemos/AsyncAwaitDemos'
import AxiosInstanceDemo from './components/AxiosInstanceDemo'
import CreatePost from './components/posts/CreatePost'
import PostsView from './components/posts/PostsView'
import UersView from './components/users/UersView'

function App() {


  return (
    <div>
      {/* <UersView />
      <PostsView /> */}
      {/* <CreatePost/> */}
      {/* <AxiosInstanceDemo/> */}
      <AsyncAwaitDemos/>
    </div>
  )
}

export default App
