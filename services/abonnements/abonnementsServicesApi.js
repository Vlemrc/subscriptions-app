import PathAbonnementsApi from './abonnementsConstantesRoutesApi';

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
    console.log(id);
    const url = PathAbonnementsApi.GET_ABONNEMENT_BY_ID + id;
    
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de l\'abonnement');
        }
        return response.json();
    })
    .catch(error => {
        console.error("Erreur d'appel API pour récupérer l'abonnement par ID :", error);
    });
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
            const response = await fetch(PathAbonnementsApi.GENERATE_PDF + id + "/document/generer-pdf", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
            });
    
            if (!response.ok) {
            console.error('Erreur de réponse API:', response.statusText);
            throw new Error('Erreur lors de la génération de PDF');
            }
    
            const contentType = response.headers.get("Content-Type");
            if (!contentType || !contentType.includes("application/pdf")) {
            console.error('Le fichier retourné n\'est pas un PDF');
            throw new Error('Le fichier retourné n\'est pas un PDF');
            }
    
            const blob = await response.blob();
            const urlPDF = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = urlPDF;
            a.download = 'contrat_abonnement.pdf';
            a.click();
            window.URL.revokeObjectURL(urlPDF);
        } catch (error) {
            console.error("Erreur d'appel API pour générer le PDF :", error);
            alert('Une erreur est survenue lors de la génération du PDF.');
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