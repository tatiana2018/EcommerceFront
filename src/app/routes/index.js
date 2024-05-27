import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { Main } from '../pages/Main';
import { ImagesSetup } from '../pages/configurations/ImagesSetup';



export const router = createBrowserRouter([
    {
        path: '/',
        // element: <Maestro />,
        // errorElement: <PaginaError />,
        children: [
            {
                path: '/',
                element: (
                    <PrivateRoute>
                        <Main />
                    </PrivateRoute>
                ),
            },
            {
                path: '/configurations',
                element: (
                    <PrivateRoute>
                        <ImagesSetup />
                    </PrivateRoute>
                ),
            }
        ]
    }
])

