import { useState } from "react";

import { get } from "../BooksAPI";
import { useParams } from "react-router-dom";

const url =
  "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-gray-solid-color-background.jpg";

const BookDetail = (props) => {
  const [book, setBook] = useState();
  const id = useParams().bookId;
  get(id).then((res) => setBook(res));
  if (book)
    return (
      <div className="book-detail">
        <div>
          <h2>Title: {book.title}</h2>
          <h3>Subititle: {book.subtitle}</h3>
          <p>authors: {book.authors}</p>
          <p>publisher: {book.publisher}</p>
          <p>published Date: {book.publishedDate}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>
            Info Link :{" "}
            <a href={book.infoLink} target="_blank" rel="noreferrer">
              Link
            </a>
          </p>
        </div>
        <img
          src={book.imageLinks ? book.imageLinks.thumbnail : url}
          alt={book.title}
        />
      </div>
    );
};

export default BookDetail;
