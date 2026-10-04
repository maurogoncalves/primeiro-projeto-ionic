import { IonIcon,IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { call } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Informações de Contato</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar >

            <IonTitle size="large">Contato  <IonIcon aria-hidden="true" icon={call} /> </IonTitle>
           
          </IonToolbar>
        </IonHeader>
        <IonAccordionGroup>


        <IonAccordion value="apresentacao">
          <IonItem slot="header">
            <IonLabel>Apresentação</IonLabel>
          </IonItem>

          <div slot="content" className="conteudo-accordion">
            <p>Olá! Meu nome é Mauro.</p>
          </div>
        </IonAccordion>

        <IonAccordion value="experiencia">
          <IonItem slot="header" >
            <IonLabel>Experiência</IonLabel>
          </IonItem>

          <div slot="content" className="conteudo-accordion">
            <p>Desenvolvedor de sistemas.</p>
          </div>
        </IonAccordion>

        <IonAccordion value="contato">
          <IonItem slot="header">
            <IonLabel>Contato</IonLabel>
          </IonItem>

          <div slot="content" className="conteudo-accordion">
            <p>Email: exemplo@email.com</p>
          </div>
        </IonAccordion>

      </IonAccordionGroup>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
