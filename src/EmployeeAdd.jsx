import React from "react";

export default class EmployeeAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.state = { employees: [] }
    }
    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.employeeAdd;
        const employee = {
            name: form.name.value,
            extension: form.ext.value,
            email: form.email.value,
            title: form.title.value,
            // dateHired: new Date(),
            // isEmployed: true,
        };
        this.props.createEmployee(employee);
        form.name.value = "";
        form.ext.value = "";
        form.email.value = "";
        form.title.value = "";
    }
    render() {
        return (
            <form name="employeeAdd" onSubmit={this.handleSubmit}>
                Name: <input type="text" name="name" />
                <br />
                Extension: <input type="text" name="ext" maxLength={4} />
                <br />
                Email: <input type="text" name="email" />
                <br />
                Title: <input type="text" name="title" />
                <br />
                {/* DateHired: <input type="date" name="dateHired" />
                <br /> */}
                {/* Currently Employed?:{" "}
                <input type="text" name="isEmployed" value="true" />
                <br /> */}
                <button>Add</button>
            </form>
        );
        // return (<div>This is a placeholder for a form to add a new employee.</div>)
    }
}
