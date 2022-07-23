import styles from "./Shelf.module.css";
import Book from "./Book";

const Shelf = (props) => {
  const booksCategory = props.books
    ? props.books.filter((book) => book.shelf === props.section)
    : [];

  return (
    <div className={styles.shelf}>
      <div className="left">
        <h2>{props.shelf}</h2>
      </div>
      <div>
        <ul>
          {booksCategory.map((book) => (
            <Book book={book} key={book.id} changeShelf={props.changeShelf} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shelf;
