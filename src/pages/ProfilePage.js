import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../sass/pages/ProfilePage.css';

function ProfilePage() {
  const email = useSelector((state) => state.user.email);
  const history = useHistory();

  return (
    <div className="ProfilePage">
      <Header title="Profile" back />
      <main>
        <h2 data-testid="profile-email">{email}</h2>
        <button
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ () => {
            localStorage.clear();
            history.push('/login');
          } }
        >
          Logout
        </button>
      </main>
      <NavBar />
    </div>
  );
}

export default ProfilePage;
