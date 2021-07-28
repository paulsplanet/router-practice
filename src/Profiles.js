import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";


const Profiles = () => {
    return(
        <div>
            <h3>User List</h3>
            <ul>
                <li><Link to="/profiles/velopert">Velopert</Link></li>
                <li><Link to="/profiles/gildong">Gildong</Link></li>
            </ul>

            <Route path="/profiles" exact render={() => <div>Select User</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>

    )  
};

export default Profiles;