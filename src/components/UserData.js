import Card from "./Card";
import './UserData.css'

const UserData = (props) => {
    return <Card className="card-size users">
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
            
        </ul>
    </Card>
}

export default UserData;