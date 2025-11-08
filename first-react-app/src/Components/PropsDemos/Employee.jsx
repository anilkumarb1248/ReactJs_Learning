import React from 'react';
import PropTypes from 'prop-types';

function Employee(props){
        return (
        <>
            <h2>Employee Details</h2>
            <h4>Id: {props.id} </h4>
            <h4>Name: {props.name} </h4>
            <h4>Salary: {props.salary} </h4>
            <h4>Email: {props.email} </h4>
            <h4>Phone: {props.phone} </h4>
        </>
    );

    // return (
    //     <>
    //         <h2>Employee Details</h2>
    //         <h4>Id: {props.employee.id} </h4>
    //         <h4>Name: {props.employee.name} </h4>
    //         <h4>Salary: {props.employee.salary} </h4>
    //         <h4>Email: {props.employee.email} </h4>
    //         <h4>Phone: {props.employee.phone} </h4>
    //     </>
    // );
}

Employee.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number // Optional
}

export default Employee;