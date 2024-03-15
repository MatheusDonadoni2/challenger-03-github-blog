import "./global.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import { RouterProvider } from "react-router-dom";
import { router } from "./page/routes";

export function App() {
  return (
    <ThemeProvider storageKey="github-blog-theme" defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
