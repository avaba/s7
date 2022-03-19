import React from 'react';
import {AuthCheck} from "../utils/AuthCheck";

const Profile = () => {
    return (
        <AuthCheck>
            <h1>Профиль</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, qui! Delectus deserunt
                ipsam totam veniam. Animi aut cum, dolor eaque eum labore maiores officiis pariatur, quod
                repellendus sequi unde.</p>
        </AuthCheck>
    );
};

export default Profile;