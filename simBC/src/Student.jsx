import PropTypes from 'prop-types'


function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name} and is {props.age} years old</p>
        </div>
    );

}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}


Student.defaultProps = {
    name: "Guest",
    age: 69,
}

export default Student;