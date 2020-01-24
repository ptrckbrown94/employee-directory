import React from "react";


function List(props) {

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">DOB</th>
                    <th scope="col">City</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user =>
                    <tr>
                        <td></td>
                        <td >{user.name.first}</td>
                        <td >{user.name.last}</td>
                        <td >{user.dob.age}</td>
                        <td >{user.location.city}</td>
                        <td >{user.email}</td>
                    </tr>
                )}

            </tbody>
        </table>
    )

}
export default List;