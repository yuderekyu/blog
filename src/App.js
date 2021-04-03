import logo from './logo.svg';
import Blog from './modules/blog/components/blog.jsx';

function App() {
  return (
    <Blog endpoint={'https://jsonplaceholder.typicode.com/posts'} userId={1} />
  );
}

export default App;
