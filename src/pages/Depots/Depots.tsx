import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from "@ionic/react";
import { useHistory } from "react-router";

// CSS
import './Depots.css';

const Depots: React.FC = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack(); // Revenir à la page précédente
      };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="depots-title">Les différents dépots</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={goBack}>Retour</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Depots;
