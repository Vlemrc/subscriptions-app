import PathAbonnementsApi from './abonnementsRoutesApi';

// Appel au service de création d'un abonnement
const createAbonnementService = (token, abonnementData) => {
    return async () => {
        try {
            const response = await fetch(PathAbonnementsApi.CREATE_ABONNEMENT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(abonnementData), 
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création de l\'abonnement');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour créer l'abonnement :", error);
        }
    };
};

//Appel pour l admin si il y'a une page car sa récupère tous les abonnements de tout le monde.
const allAbonnementsService = (token) => {
    return async () => {
    try {
        
        const response = await fetch(PathAbonnementsApi.GET_ALL_ABONNEMENTS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
        }})
        const data = await response.json();
        return data;
        } catch (error) {
            console.error("Erreur d'appel API :", error);
        }
    };
}
  
const getAbonnementByIdService = (token, id) => {
    return async () => {
        try {
            const url = PathAbonnementsApi.GET_ABONNEMENT_BY_ID + id;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération de l\'abonnement');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour récupérer l'abonnement par ID :", error);
        }
    };
};

// Appel au service de récupération des abonnements d'un utilisateur
const getAllAbonnementsByUserIdService = (token, userId) => {
    return async () => {
        try {
            const url = PathAbonnementsApi.GET_ABONNEMENT_BY_USER + userId;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des abonnements de l\'utilisateur');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour récupérer les abonnements de l'utilisateur :", error);
        }
    };
};

// Appel au service de suppression d'un abonnement
const deleteAbonnementByIdService = (token, id) => {
    return async () => {
        try {
            const url = PathAbonnementsApi.DELETE_ABONNEMENT + id;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la suppression de l\'abonnement');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Erreur d'appel API pour supprimer l'abonnement :", error);
        }
    };
};

// Appel au service de génération du pdf.
const generatePdfService = (token, id) => {
    return async () => {
        try {
            const url = GENERATE_PDF.replace(':id', id);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la génération de PDF');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erreur d'appel API pour générer le PDF :", error);
        }
    };
};

const abonnementsService = {
    createAbonnementService,
    allAbonnementsService,
    getAbonnementByIdService,
    getAllAbonnementsByUserIdService,
    deleteAbonnementByIdService,
    generatePdfService
}

export default abonnementsService;