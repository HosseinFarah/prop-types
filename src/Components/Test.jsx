import propTypes from 'prop-types'
export const Test = (props) => {
  return (
    <div>
      <ul>
        <li>Name: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Age: {props.age}</li>
        <li>Maried: {props.isMaried?"Yes":"No"}</li>
        <li>Cources: {props.courses}</li>
      </ul>
    </div>
  );
};

Test.propTypes = {
  name: propTypes.string,
  email:propTypes.string,
  age:propTypes.number,
  isMaried:propTypes.bool,
  courses:propTypes.arrayOf(propTypes.string)
}
