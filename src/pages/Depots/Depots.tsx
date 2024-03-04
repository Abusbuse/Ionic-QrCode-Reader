import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from "@ionic/react";
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
          <IonButton onClick={goBack}>
            <img src="./resources/left-arrow.png" alt="Retour" width={16} height={16}/>
          </IonButton>
        <div className="depots-content">
          <p>Vous pouvez retrouver la liste de nos dépots</p>
          <IonList className="depots-list">
            <IonItem>
              <p>Depot 1</p>
            </IonItem>
            <IonItem>
              <p>Depot 2</p>
            </IonItem>
            <IonItem>
              <p>Depot 3</p>
            </IonItem>
            <IonItem>
              <p>Depot 1</p>
            </IonItem>
            <IonItem>
              <p>Depot 2</p>
            </IonItem>
            <IonItem>
              <p>Depot 3</p>
            </IonItem>
            <IonItem>
              <p>Depot 1</p>
            </IonItem>
            <IonItem>
              <p>Depot 2</p>
            </IonItem>
            <IonItem>
              <p>Depot 3</p>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Depots;
