const MyComponent = () => {
    // Example array of items
    const items = ['Item 1', 'Item 2', 'Item 3'];
  
    return (
      <div>
        <h1>List of Items:</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MyComponent;
