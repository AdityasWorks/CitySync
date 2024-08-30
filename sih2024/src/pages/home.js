import React, { useEffect } from 'react'; // Import useState and useEffect from React
import { auth } from '../components/firebase/firebase'; // Ensure this import path is correct
import { doSignOut } from '../components/firebase/auth'; // Ensure this import path is correct

function Home() {

    useEffect(() => {
        // Check if user is already signed in
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
            } else {
                console.log('No user logged in');
            }
        });

        return () => {
            unsubscribe(); // Cleanup function to unsubscribe from the auth state listener
        };
    }, []);

    return (
        <header className="header">
            <div className="logo">Eventral</div>
            <nav className="navbar">
                <div className='nav-btn'>
                    <button className='btn-new' onClick={doSignOut}>
                        Logout
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Home;
