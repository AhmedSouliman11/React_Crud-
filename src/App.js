import React, { Component } from 'react';
import CourseList from './Components/CouseList';
import CourseForm from './Components/CourseForm';
class App extends Component { 
  state = {
    courses : [
      {name : "Hmtl"},
      {name : "Css"},
      {name : "Jquery"}
    ],
    current : ''
  }
  //delete item 
  deleteItem = (index) =>{
    let courses = this.state.courses ; 
    courses.splice(index,1);
    this.setState({courses});
  }
  //Update Course 
  updateCourse = (e) =>{
    this.setState({
      current : e.target.value
    });
  }
  //Add Course 
  AddCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if(current !== ""){
      courses.push({name : current});
      this.setState({courses , current : ''});
    }
  }
  //edit course 
  editCourse = (index , value) =>{
    let courses = this.state.courses ; 
    let course = courses[index];
    course['name'] = value ;
    this.setState({courses});
  }
  render(){
    let courses = this.state.courses ;
    let length = courses.length;
    let courseList = length ? ( courses.map((course , index) => {
      return(
        <CourseList details={course} key={index} index={index} deleteItem={this.deleteItem} editCourse={this.editCourse}/>
      );
    })) : ( <p>There Is No Items To Show</p> ) ;
    return(
      <section className="App">
        <h2>Add Courses</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.AddCourse}/>
        <ul>
          {courseList}
        </ul>
      </section>
    );
  }
}
export default App ;