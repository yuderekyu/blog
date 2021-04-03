import { QueryClient, QueryClientProvider } from 'react-query';
import { Blog } from './modules/blog/components';
import { ErrorBoundary } from './modules/common/components';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Blog endpoint={'https://jsonplaceholder.typicode.com/posts'} userId={1} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
