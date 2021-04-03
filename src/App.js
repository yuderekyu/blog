import { QueryClient, QueryClientProvider } from 'react-query';
import Blog from './modules/blog/components/blog.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Blog endpoint={'https://jsonplaceholder.typicode.com/posts'} userId={1} />
    </QueryClientProvider>
  );
}

export default App;
