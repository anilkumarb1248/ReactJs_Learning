import Employee from "./Employee";

const EmployeeData = () => {

    const employee = {
        id: '100',
        name: 'Anil',
        salary: 10000,
        email:'abc@test.com',
        phone:9876543210
    }
    return(
        <>
            <Employee id={employee.id}/>
        </>
    );
}

export default EmployeeData;