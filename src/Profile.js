import React from "react";

const data ={
    velopert: {
        name: "paul",
        description: "beginner",
    },
    gildong: {
        name: "gogildong",
        description: "dulee's father",
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>Can't find this user.</div>
    } return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;