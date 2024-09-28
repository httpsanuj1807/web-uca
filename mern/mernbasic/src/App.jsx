import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import routes from "./routes";
import { Home } from "./Pages/Home";
import { Signup } from "./Pages/Signup";

export function App() {
    
  const router = createBrowserRouter(routes);

  return (
    <>
      <Layout>
        <main>
          <RouterProvider router={router}>
            <Home />
            <Signup />
          </RouterProvider>
        </main>
      </Layout>
    </>
  );
}
