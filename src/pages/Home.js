import { Fragment } from "react";
import Shelf from "../components/books/Shelf";

const Home = (props) => {
  return (
    <Fragment>
      <Shelf
        shelf="Currently Reading"
        books={props.books}
        section="currentlyReading"
        changeShelf={props.changeShelf}
      />
      <Shelf
        shelf="Want To Read"
        books={props.books}
        section="wantToRead"
        changeShelf={props.changeShelf}
      />
      <Shelf
        shelf="Read"
        books={props.books}
        section="read"
        changeShelf={props.changeShelf}
      />
    </Fragment>
  );
};

export default Home;
