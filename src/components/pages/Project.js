import GitHubIcon from "@mui/icons-material/GitHub";

function Project({project}){
    return (
        <div className="projectOnly">
            
        <li className="list-group-item" >
        <ul className="grid_list">
           <h3>{project.name} <a href={project.GH}>
            <GitHubIcon className="icon" style={{ color: "white"}} /></a></h3>
           

           <a href={project.bio}><img src= {require("../../images/"+ project.image + ".png")} className="img-fluid" alt = {project.name}/></a>
           </ul>
          </li>
         
          </div>
    )
}

export default Project