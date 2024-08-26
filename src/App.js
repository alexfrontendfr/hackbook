import React, { useState, lazy, Suspense } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import { books } from "./components/books";

const HomePage = lazy(() => import("./components/HomePage"));
const BookReader = lazy(() => import("./components/BookReader"));
const Library = lazy(() => import("./components/Library"));
const Discover = lazy(() => import("./components/Discover"));
const GetStartedModal = lazy(() => import("./components/GetStartedModal"));
const DarkModeToggle = lazy(() => import("./components/DarkModeToggle"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  const handleNavigation = (page, book = null) => {
    setCurrentPage(page);
    setSelectedBook(book);
    if (page === "get-started") {
      setIsGetStartedOpen(true);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            books={books}
            onSelectBook={(book) => handleNavigation("book", book)}
          />
        );
      case "library":
        return (
          <Library
            books={books}
            onSelectBook={(book) => handleNavigation("book", book)}
          />
        );
      case "discover":
        return <Discover />;
      case "book":
        return selectedBook ? (
          <BookReader
            book={selectedBook}
            onClose={() => handleNavigation("home")}
            relatedBooks={books
              .filter((b) => b.id !== selectedBook.id)
              .slice(0, 3)}
            onSelectBook={(book) => handleNavigation("book", book)}
          />
        ) : null;
      default:
        return (
          <HomePage
            books={books}
            onSelectBook={(book) => handleNavigation("book", book)}
          />
        );
    }
  };

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>
        <ErrorBoundary>
          <Layout onNavigate={handleNavigation}>
            <Suspense fallback={<LoadingScreen />}>
              <DarkModeToggle />
              {renderContent()}
              <GetStartedModal
                isOpen={isGetStartedOpen}
                onClose={() => setIsGetStartedOpen(false)}
              />
              <ScrollToTop />
            </Suspense>
          </Layout>
        </ErrorBoundary>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;
