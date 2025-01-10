import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


interface PageModule {
  default: React.ComponentType;
}

const pages = import.meta.glob<PageModule>("../pages/**/page.tsx");

interface Page {
  path: string;
  Component: React.ComponentType;
}

const Layout: React.FC = () => {
  const [loadedPages, setLoadedPages] = useState<Page[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const loadPages = async () => {
      const modules = await Promise.all(
        Object.entries(pages).map(async ([path, importer]) => {
          const module = await importer();
          const routePath = path
            .replace("../pages/", "")
            .replace("/page.tsx", "");
          return {
            path: `/${routePath}`, 
            Component: module.default,
          };
        })
      );
      setLoadedPages(modules);
    };

    loadPages();
  }, []);

  const filteredPages = loadedPages.filter(({ path }) =>
    path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-500 p-6">
      <h1 className="text-center text-4xl font-bold text-slate-50 mb-6">Webpage</h1>
      
      <div className="mb-4 text-white">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md mx-auto"
        />
      </div>

      <nav className="mb-6 w-96 mx-auto">
        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {filteredPages.length === 0 ? (
            <li className="text-center text-gray-500">No pages found</li>
          ) : (
            filteredPages.map(({ path }) => (
              <li key={path} className="hover:bg-blue-50 rounded-md transition">
                <Link
                  to={path}
                  className="block px-4 py-2 text-lg text-slate-200 hover:text-white hover:bg-slate-600 rounded-md"
                >
                  {path}
                </Link>
              </li>
            ))
          )}
        </ul>
      </nav>

      <Routes>
        {filteredPages.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<div className="text-center text-red-500">Page not found</div>} />
      </Routes>
    </div>
  );
};

export default Layout;
