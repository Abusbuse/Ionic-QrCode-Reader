import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { atCircle, ellipse, square, triangle } from 'ionicons/icons';
import Tournee from './pages/Tournee/Tournee';
import Depots from './pages/Depots/Depots';
import QrCode from './pages/QRCodeReader/QrCode';
import QrCodeTest from './pages/OtherOne/QrCodeTest';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tournee">
            <Tournee />
          </Route>
          <Route exact path ="/depots">
            <Depots />
          </Route>
          <Route exact path="/qrcode">
            <QrCode />
          </Route>
          <Route exact path="/qrcodetest">
            <QrCodeTest />
          </Route>
          <Route exact path="/">
            <Redirect to="/tournee" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tournee" href="/tournee">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tournée</IonLabel>
          </IonTabButton>
          <IonTabButton tab="qrcode" href="/qrcode">
            <IonIcon aria-hidden="true" icon={triangle}/>
            <IonLabel>QrCode</IonLabel>
          </IonTabButton>
          <IonTabButton tab="qrcodetest" href="/qrcodetest">
            <IonIcon aria-hidden="true" icon={atCircle}/>
            <IonLabel>QrCodetest</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
