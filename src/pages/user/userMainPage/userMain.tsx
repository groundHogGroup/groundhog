import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';

import './userMain.css';

const UserMain: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="success"/>
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <div >
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.
        49557064608!2d3.4535066249185236!3d6.450240895542433!2m3!1f0!2f0!3f0!3m2!
        1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2s
        Lekki%20Phase%201%2C%20Lekki!5e0!3m2!1sen!2sng!4v1610970241331!5m2!1sen!2sng" 
        style={{border:0,width:'100%', height:'95vh'}}aria-hidden="false"></iframe>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserMain;
