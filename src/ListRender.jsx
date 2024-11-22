import { useState } from "react";

const ListRender = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", description: "A novel by F. Scott Fitzgerald." },
    { id: 2, title: "To Kill a Mockingbird", description: "A novel by Harper Lee." },
    { id: 3, title: "1984", description: "A novel by George Orwell." },
  ]);

  const handleAdd = () => {
    const id=books.length+1;
    let title=prompt("Enter title");
    let des=prompt("Enter description");
    if(title && des){
        setBooks(
            [...books,
            {id,title,description:des}]
        )
    }
    else{
        alert("Both data needed");
    }
  }

  const handleEdit = (id) => {
    const updatedTitle = prompt("Enter the new title:");
    const updatedDescription = prompt("Enter the new description:");
    if (updatedTitle || updatedDescription) {
        setBooks(
          books.map((book) =>
            book.id === id
              ? {
                  ...book,
                  ...(updatedTitle && { title: updatedTitle }),
                  ...(updatedDescription && { description: updatedDescription }),
                }
              : book
          )
        );
      }
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1>unique keys importance while rendering list</h1>
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <div>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => handleEdit(book.id)} style={buttonStyle}>
              Edit
            </button>
            <button onClick={() => handleDelete(book.id)} style={buttonStyle}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => handleAdd()} style={buttonStyle}>Add</button>
    </div>
  );
};

const buttonStyle = {
  padding: "5px 10px",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
  backgroundColor: "#007BFF",
  color: "#fff",
};

export default ListRender;
