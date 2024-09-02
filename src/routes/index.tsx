import { MainScreen } from '../pages/Main/index';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen />
    }
]);
  