import React, { Component } from 'react';
import ProjectItem from './projectItem';



class Projects extends Component { 
    deleteProject(id) {
        this.props.onDelete(id);
    }
  
  render() {     
      let projectItems; 
    if(this.props.projects) {
        console.log(this.props.projects);
        projectItems = this.props.projects.map((project) => {
            // console.log(project);
            return (
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
            );
        });
        }
    return (
      <div className="Projects">
      <h3>Latest Projects </h3>
        {projectItems}
        
      </div>
    );
  }
}

// Projects.propTypes = {
//     projects: React.propTypes.array,
//     onDelete: React.propTypes.func
// }

export default Projects;
