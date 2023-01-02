import { createBrowserRouter } from 'react-router-dom';

import WatchPage from '@features/watch/watch.page';
import MainPage from '@features/main/main.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/watch/:id',
    element: <WatchPage />,
  },
]);

export default router;
