import React, { Component } from 'react';




class ProjectItem extends Component {

deleteProject(id) {
  this.props.onDelete(id);

  }

  render() {      
    return (
      <li className="Project">
        <strong>{this.props.project.title} </strong>: - {this.props.project.category} <a href="Here" onClick={this.deleteProject.bind(this, this.props.project.id)}> X</a>
        
      </li>
      
    );
    // console.log(this.props.project.title);
  }
}

// ProjectItem.propTypes = {
//   // project: React.propTypes.array,
//   onDelete: React.propTypes.func
// }

export default ProjectItem;
