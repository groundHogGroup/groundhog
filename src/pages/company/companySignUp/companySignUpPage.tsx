import React from 'react';

// import { 
//     IonButton,
//     IonContent,
//      IonPage, 
//      } from '@ionic/react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText, IonBackButton } from '@ionic/react';

import './companySignUpPage.css'

class CompanySignUp extends React.Component{
    render(){
        return(
        <IonPage id="login-page">
            <IonContent>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start" color="success">
                    <IonBackButton defaultHref="welcome" color="success" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
                <IonRow>
                    <IonCol>
                        <div className="signUpTitle">
                            <h2>Welcome To GroundHog</h2></div>
                    </IonCol>
                </IonRow>
                <form noValidate >
                <IonList>
                    <IonItem>
                    
                    <IonInput name="companyname" type="text" placeholder="Company Name" spellCheck={false} autocapitalize="off"
                        required>
                    </IonInput>
                    </IonItem>

                    {/* <IonText color="danger">
                    <p className="ion-padding-start">
                        First name is required
                    </p>
                    </IonText> */}
                    
                    <IonItem>
                    
                    <IonInput name="email" type="text" placeholder="Email" spellCheck={false} autocapitalize="off"
                        required>
                    </IonInput>
                    </IonItem>
{/* 
                    <IonText color="danger">
                    <p className="ion-padding-start">
                        Email is required
                    </p>
                    </IonText> */}
                    <IonItem>
                    
                    <IonInput name="password" minlength={8} type="password" placeholder="Password" spellCheck={false} autocapitalize="off"
                        required>
                    </IonInput>
                    </IonItem>

                    {/* <IonText color="danger">
                    <p className="ion-padding-start">
                        Username is required
                    </p>
                    </IonText> */}
                    <IonItem>
                    
                    <IonInput name="confirmPassword" type="password" placeholder="Confirm Password" spellCheck={false} autocapitalize="off"
                        required>
                    </IonInput>
                    </IonItem>

                    {/* <IonText color="danger">
                    <p className="ion-padding-start">
                        Username is required
                    </p>
                    </IonText> */}
                </IonList>

                <IonRow>

                    <IonCol> 
                    <IonButton routerLink="/comapanyMain" color="success" expand="block">Signup</IonButton>
                    </IonCol>
                </IonRow>
                </form>
                
                <IonRow>

                    <IonCol>
                        <p className="text">OR</p>
                        <p className="text">Already have an Account?</p>
                        
                    </IonCol>
                    </IonRow>
                    <IonRow>
                    <IonCol>
                    <IonButton routerLink="/login" type="submit" fill="outline" color="success"expand="block">Login</IonButton>
                    </IonCol>

                </IonRow>



            </IonContent>

            </IonPage>
        )
        }
    }


export default CompanySignUp;