
import { useParams,useNavigate } from "react-router";
import { useState } from "react";
import { updateBook } from "../../slices/bookslice";
import { useSelector,useDispatch } from "react-redux";
const EditBook = () => {
  
   
  const { id } = useParams();

  const dispatch = useDispatch();
  const nav = useNavigate();

  const books = useSelector((state)=>state.books.books)
  const book = books.find((book)=>book.id === Number(id))

  const[formdata,setformdata] = useState({

    title : book?.title || "",
    author : book?.author || "",
    category : book?.category || "",
    quantity : book?.quantity || ""

  })

  const handleChange = (e)=>{
    setformdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  const handlesubmit = (e)=>{
    e.preventDefault();

    const updatedbook = {
      id : Number(id),
      title : formdata.title,
      author : formdata.author,
      category : formdata.category,
      quantity : Number(formdata.quantity)
    }

    dispatch(updateBook(updatedbook))
    nav('/books')
  }

  if(!book){
    return <><h2>Book not Found</h2></>
  }
  return (
    <div>
       <h2>Edit Book</h2> 
       <form onSubmit={handlesubmit}> 
        <input type="text" name="title" placeholder="Book Title" value={formdata.title} onChange={handleChange} /> <br /> 
        <input type="text" name="author" placeholder="Author" value={formdata.author} onChange={handleChange} /> <br /> 
        <input type="text" name="category" placeholder="Category" value={formdata.category} onChange={handleChange} /> <br /> 
        <input type="number" name="quantity" placeholder="Quantity" value={formdata.quantity} onChange={handleChange} /> <br /> 
        <button type="submit"> Update Book </button> 
        </form> 
        </div>
  );
};

export default EditBook;

