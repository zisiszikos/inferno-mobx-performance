import { Component } from "inferno";
import { inject, observer } from "inferno-mobx";

class MyComponent extends Component {
    componentDidMount() {
        console.timeEnd("Time");
    }
    componentDidUpdate() {
        console.timeEnd("Time");
    }
    render({ users }) {
        console.time("Time");
        return (
            <div>
                <p>Users list:</p>
                <div $HasKeyedChildren>
                    {users.map((user, index) => (
                        <UserName name={user.name} index={index} key={index} />
                    ))}
                </div>
            </div>
        );
    }
}

const UserName = ({ name, index }) => {
    return (
        <div>
            <h3>
                {name} {index} <span>is a user. {index * 100}</span>
            </h3>
        </div>
    );
};

export default inject(stores => ({
    users: stores.account.users,
}))(observer(MyComponent));
