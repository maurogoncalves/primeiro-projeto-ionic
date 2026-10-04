import { IonAvatar } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonCard, IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
// import minhaFoto from '../assets/avatar.png';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader className="cabecalho" collapse="condense">
  <IonToolbar>
    <IonTitle size="large">Apresentação</IonTitle>

    <IonAvatar slot="end">
      <img
        alt="Minha Foto"
        src="https://i.pravatar.cc/150?img=12"
      />
    </IonAvatar>
  </IonToolbar>
</IonHeader>
        {/* <ExploreContainer name="\Tab 1 pa\\\e" /> */}

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle className='subTitulo'>
            Informações
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className='conteudo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit tristique turpis. Vestibulum arcu ante, finibus bibendum ipsum a, commodo congue metus. Cras eleifend mi nisl, quis iaculis nulla euismod vel. Praesent orci mi, consequat ut vehicula et, cursus et libero. Nulla facilisi. Donec ut turpis lorem. In eu nisi nisl. Nunc facilisis iaculis accumsan. Integer nunc turpis, interdum sit amet tempor quis, rutrum sit amet tellus. Donec finibus aliquet ipsum non dignissim. Curabitur congue, justo vel elementum lobortis, arcu tellus hendrerit arcu, auctor interdum tellus lectus feugiat arcu. 
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
