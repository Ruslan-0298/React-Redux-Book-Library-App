import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import "./BookList.css";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => {
            return (
              <li key={i}>
                <div className="book-info">
                  {++i}. {book.title} by <strong>{book.author}</strong>
                </div>
                <div className="book-actions">
                  {book.isFavorite ? (
                    <RxBookmarkFilled
                      onClick={() => dispatch(toggleFavorite(book.id))}
                      className="star-icon"
                    />
                  ) : (
                    <RxBookmark
                      onClick={() => dispatch(toggleFavorite(book.id))}
                      className="star-icon"
                    />
                  )}
                  <button onClick={() => dispatch(deleteBook(book.id))}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BookList;
