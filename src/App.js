import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { getAll, update, search } from "./BooksAPI";
import Home from "./pages/Home";
import Search from "./pages/Search";
import BookDetail from "./pages/BookDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  const [booksData, setBooksData] = useState(null);
  const [booksSearchData, setBooksSearchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = (query) => {
    query.length > 0 && setIsLoading(true);
    search(query).then((res) => {
      if (res && !res.error) {
        res.forEach((booksSearch) => {
          booksData.forEach(
            (book) =>
              booksSearch.id === book.id && (booksSearch.shelf = book.shelf)
          );
        });
        setIsLoading(false);
        setBooksSearchData(res);
      } else {
        setIsLoading(false);
        setBooksSearchData("");
      }
    });
  };

  useEffect(() => {
    getAll().then((data) => setBooksData(data));
  }, []);

  const changeShelfHandler = (data) => {
    if (data) {
      update(data.book, data.shelf)
        .then(() => getAll())
        .then((res) => setBooksData(res));
    }
  };
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home books={booksData} changeShelf={changeShelfHandler} />
        </Route>
        <Route path="/search">
          <Search
            isLoading={isLoading}
            books={booksSearchData}
            onSearch={searchHandler}
            changeShelf={changeShelfHandler}
          />
        </Route>
        <Route path="/books/:bookId">
          <BookDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
