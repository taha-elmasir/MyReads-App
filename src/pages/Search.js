import { Fragment, useState } from "react";

import Book from "../components/books/Book";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import styles from "./Search.module.css";

const Search = (props) => {
  const [value, setValue] = useState("");
  const notFound =
    value.length > 0 && !props.isLoading ? "No books found." : "";

  const searchHandler = (e) => {
    setValue(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <Fragment>
      <input
        onChange={searchHandler}
        value={value}
        type="search"
        placeholder="Search..."
      />
      <ul className={styles.search}>
        {props.isLoading && <LoadingSpinner />}
        {props.books
          ? props.books.map((book) => (
              <Book book={book} key={book.id} changeShelf={props.changeShelf} />
            ))
          : notFound}
      </ul>
    </Fragment>
  );
};

export default Search;
