import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Footer from './footer';
import MenuAppBar from './AppBar';

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div style={{
            backgroundImage: `url('https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            height: '90vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black', 
            textAlign: 'center',
            paddingBottom: '105vh'
        }}>
            <MenuAppBar />
            <h1>Hi</h1>
            {user ? (
                <p>Username: {user.username}</p>
            ) : (
                <p>No user is logged in<br/>Please Return Home</p>
            )}
            <Footer />
        </div>
    );
};

export default Profile;
