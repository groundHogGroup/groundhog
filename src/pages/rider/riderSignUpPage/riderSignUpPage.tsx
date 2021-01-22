import React from 'react';

// import { 
//     IonButton,
//     IonContent,
//      IonPage, 
//      } from '@ionic/react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText, IonBackButton, IonSelect, IonSelectOption } from '@ionic/react';

import './riderSignUpPage.css'

class RiderSignUp extends React.Component{
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
                    
                    <IonInput name="firstname" type="text" placeholder="First Name" spellCheck={false} autocapitalize="off"
                        required>
                    </IonInput>
                    </IonItem>

                    {/* <IonText color="danger">
                    <p className="ion-padding-start">
                        First name is required
                    </p>
                    </IonText> */}
                    <IonItem>
                    
                    <IonInput name="lastname" type="text" placeholder="Last Name" spellCheck={false} autocapitalize="off"
                        required>
                    </IonInput>
                    </IonItem>

                    {/* <IonText color="danger">
                    <p className="ion-padding-start">
                        Last Name is required
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
                        <IonLabel>Company Name</IonLabel>
                        <IonSelect>
                            <IonSelectOption value="brown">Brown</IonSelectOption>
                            <IonSelectOption value="blonde">Blonde</IonSelectOption>
                            <IonSelectOption value="black">Black</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                        </IonSelect>
                    </IonItem>
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
                    {/* <IonCol>
                    <IonButton type="submit" expand="block">Login</IonButton>
                    </IonCol>*/}
                    <IonCol> 
                    <IonButton routerLink="/riderMain" color="success" expand="block">Signup</IonButton>
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
                    <IonButton routerLink="/riderMain" type="submit" fill="outline" color="success"expand="block">Login</IonButton>
                    </IonCol>

                </IonRow>



            </IonContent>

            </IonPage>
        )
        }
    }


export default RiderSignUp;