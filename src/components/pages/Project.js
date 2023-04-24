function Project({project}){
    return (
        <div className="projectOnly">
        <li className="list-group-item" >
           <h3>{project.name}</h3>
           <a href={project.bio}><img src= {require("../../images/"+ project.image + ".png")} className="img-fluid" alt = {project.name}/></a>
          </li>
          </div>
    )
}

export default Project