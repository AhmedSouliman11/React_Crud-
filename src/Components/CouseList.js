import React, { Component } from 'react';
class CourseList extends Component {
    state = {
        isEdit : false
    }
    renderCourse = () =>{
        return(
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => this.toggleState()}>Edit Course</button>
                <button onClick={() => this.props.deleteItem(this.props.index)}>Delete Course</button>
            </li>
        );
    }
    //Toggle state
    toggleState = () =>{
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        });
    }
    //Update Course
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value);
        this.toggleState();
    }
    renderUpdateForm = () => {
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        );
    }
    render(){
        let {isEdit} = this.state;
        return(
            <>
                {isEdit ? this.renderUpdateForm() :  this.renderCourse()}
            </>
        );
    }
}
export default CourseList;