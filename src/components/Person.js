const Person = (props) => {
  const {name, age, address} = props;
  return (<>
    <h1>Name: {name}</h1>
    <h1>Age: {age}</h1>
    <h1>Address: {address}</h1>
  </>)
}
// Person
// const people = [
//   {name: "John Doe", age: 30, address: "123 Main St"},
//   {name: "Jane Doe", age: 28, address: "456 Elm St"},
//   {name: "Bob Builder", age: 35, address: "789 Oak St"}
// ];

export default Person;