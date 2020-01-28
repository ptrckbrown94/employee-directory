import React from "react";

// Austin Schlander helped with the sorting function
// const AgeSort = property => {
//     var sortOrder = 1;
//     if(property[0] === "-") {
//         sortOrder = -1;
//         property = property.substr(1);
//     }
//     return function (a,b) {
//         /* next line works with strings and numbers, 
//          * and you may want to customize it to your needs
//          */
//         var result = (a.dob[property] < b.dob[property]) ? -1 : (a.dob[property] > b.dob[property]) ? 1 : 0;
//         return result * sortOrder;
//     }
// };

// the below function is used to render the the information from the API 


function List(props) {

    return (
        <table className="table">
            <thead>
                <tr>                    
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Age</th> 
                    <th scope="col">City</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user =>
                    <tr>
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