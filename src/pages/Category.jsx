
const Categories = () => {
  const categories = [
    "Programming",
    "Science",
    "History",
    "Fiction",
    "Biography"
  ];

  return (
    <div>
      <h2>Categories</h2>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

