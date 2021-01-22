import React from 'react';
import { 
    IonButton,
    IonContent,
     IonPage, 
     } from '@ionic/react';


     import './welcomePage.css'

class WelcomePage extends React.Component{
    render(){
        return(
            <IonPage id="welcomePage">
            <IonContent>
                <div className="WelcomeBody">
                    <div className="header">
                        <h2>Welcome!</h2>
                    </div>
                    <div className="signUpAs">
                        <h1 className="SignUpAsText">Sign Up AS</h1>
    
                         <IonButton  routerLink="/userSignUp" className="SignUpAsBtn" fill="outline" color="light" expand="block">User</IonButton>
                         <IonButton routerLink="/riderSignUp"className="SignUpAsBtn" fill="outline" color="light" expand="block">Rider</IonButton>
                         <IonButton  className="SignUpAsBtn" fill="outline" color="light" expand="block">Company</IonButton>

                         <div className="terms">
                            <h4>Terms Of Service</h4>
                            <p className="privacy">Privacy Notice</p>
                        </div>
                    </div>

                </div>
            </IonContent>
        </IonPage>
        )
    }
}

export default WelcomePage