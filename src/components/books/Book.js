import { Route, Link } from "react-router-dom";
import Styles from "./Book.module.css";

function truncate(source, size) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

const url =
  "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-gray-solid-color-background.jpg";

const Book = (props) => {
  const changeShelfHandler = (e) => {
    const obj = {
      book: props.book,
      shelf: e.target.value,
    };
    props.changeShelf(obj);
  };
  return (
    <li id={props.book.id}>
      <div className={Styles.book}>
        <div className={Styles.top}>
          <img
            src={props.book.imageLinks ? props.book.imageLinks.thumbnail : url}
            alt={props.book.title}
          />
          <span className={`material-symbols-outlined ${Styles.add}`}>
            expand_more
            <select onChange={changeShelfHandler}>
              <option value="" className="hidden">
                Move to &rarr;
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </span>
          <Link
            to={`/books/${props.book.id}`}
            className={`material-symbols-outlined ${Styles.info}`}
          >
            info
          </Link>
        </div>
        <h4 className={Styles.title}>{truncate(props.book.title, 16)}</h4>
        <p className={Styles.author}>{props.book.authors}</p>
        <Route path="/search" exact>
          <span>{props.book.shelf ?? "None"}</span>
        </Route>
      </div>
    </li>
  );
};

export default Book;
