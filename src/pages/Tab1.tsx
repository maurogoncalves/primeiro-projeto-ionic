import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonCard, IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
            Título Card  
            </IonCardTitle>
            <IonCardSubtitle>
            SubTítulo Card
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          Pequena Descrição do Cartão
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
