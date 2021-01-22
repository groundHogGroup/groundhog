import { 
    IonButton,
    IonContent,
     IonPage, 
     } from '@ionic/react';
import React from 'react';
import LPimg from '../../images/LPimg.png'
import './landingPage.css'


class LandingPage extends React.Component{
    render(){
        return(
        <IonPage id="landng-page">
            <IonContent>
                <div className="fullPage">
                    <div className="firstHalf">
                       <h2 className="FhHeading">GroundHog</h2>
                        <p>Order. Get. Sleep</p>

                        <img src={LPimg} id="lp"/>

                    </div>
                    <div className="secondHalf">
                        <IonButton routerLink="/welcome" fill="outline" color="light" expand="block">Get Started</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
        )
    }
}

export default LandingPage;