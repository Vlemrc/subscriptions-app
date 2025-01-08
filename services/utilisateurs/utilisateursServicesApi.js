import PathUtilisateursApi from "./utilisateursConstantesRoutesApi";

// Appel au service de création d'un utilisateur.
const createUserService = (token, userData) => {
    return async () => {
        try {
            const response = await fetch(PathUtilisateursApi.CREATE_USER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création de l\'utilisateur');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour créer l'utilisateur :", error);
        }
    };
};

// Appel au service de connexion d'un utilisateur.
const connexionUserService = (userCredentials) => {
    return async () => {
        try {
            const response = await fetch(PathUtilisateursApi.CONNEXION_USER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userCredentials),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la connexion de l\'utilisateur');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour la connexion de l'utilisateur :", error);
        }
    };
};

// Appel au service de récupération d'un utilisateur.
const getUserByIdService = (token, id) => {
    return async () => {
        try {
            const url = PathUtilisateursApi.GET_USER_BY_ID + id;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération de l\'utilisateur');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erreur d'appel API pour récupérer l'utilisateur par ID :", error);
            return error;
        }
    };
};

// Appel au service de récupération de tous les utilisateurs
const getAllUsersService = (token) => {
    return async () => {
        try {
            const response = await fetch(PathUtilisateursApi.GET_ALL_USER, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des utilisateurs');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour récupérer tous les utilisateurs :", error);
        }
    };
};

// Appel au service du suppression d'un utilisateur
const deleteUserByIdService = (token, id) => {
    return async () => {
        try {
            const url = PathUtilisateursApi.DELETE_USER_BY_ID + id;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la suppression de l\'utilisateur');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour supprimer l'utilisateur :", error);
        }
    };
};

// Appel au service de modification d'un utilisateur
const updateUserByIdService = (token, id, updatedUserData) => {
    return async () => {
        try {
            const url = PathUtilisateursApi.UPDATE_USER_BY_ID + id;
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(updatedUserData),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour mettre à jour l'utilisateur :", error);
        }
    };
};

const utilisateursService = {
    createUserService,
    connexionUserService,
    getUserByIdService,
    getAllUsersService,
    deleteUserByIdService,
    updateUserByIdService
}

export default utilisateursService;