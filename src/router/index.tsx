import { createBrowserRouter } from 'react-router-dom';

import WatchPage from '@pages/watch/watch.page';
import MainPage from '@pages/main/main.page';

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
