import { login } from './authSlice';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la connexion');
    }

    const data = await response.json();
    console.log('User data:', data); 
    dispatch(login(data.utilisateur));
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'inscription');
    }

    const data = await response.json();
    console.log('User data:', data); 
    dispatch(login(data.utilisateur));
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
  }
};