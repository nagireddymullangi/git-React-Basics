import React from "react";

class AddContact extends React.Component {
    render() {
        return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <lable>Name</lable>
                    <input type="text" name="name" placeholder="name"></input>
                </div>
                <div className="field">
                    <lable>Email</lable>
                    <input type="text" name="name" placeholder="name"></input>
                </div>
                <button clasName="ui button blue">Add</button>
            </form>
        </div>
       );
   } 
};
export default AddContact;