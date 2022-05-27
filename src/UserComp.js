import {useParams} from 'react-router-dom'
function UserComp(){
    const {id, name}=useParams();
    console.log(id,name);
    return(
        <>
        <h4> user component {id} {name}</h4>
        </>
    )
}
export default UserComp;