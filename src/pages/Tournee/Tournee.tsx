import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from "@ionic/react";
import { useHistory } from "react-router";

// CSS
import './Tournee.css';

const Tournee: React.FC = () => {
  const history = useHistory();
  // Fonction pour gérer la redirection vers la page "Depots"
  const redirectToDepots = () => {
    history.push('/depots'); // Rediriger vers la page "Depots"
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="tournee-title">Nos tournées</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={redirectToDepots}>Aller vers Dépôts</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tournee;
