import React from 'react';

import { IonHeader,IonBackButton,
     IonToolbar, IonContent,
      IonPage, IonButtons,
       IonRow, IonCol, 
       IonButton, IonItem,
        IonInput, IonText, 
         } from '@ionic/react';

import './loginpage.css'

class Login extends React.Component{
    render(){

        return(
            <IonPage id="loginpage">
            <IonContent >
                <div className="contain">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start" color="success">
                    <IonBackButton defaultHref="userSignUp" color="success" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <div className="group">
                <IonRow>
                    <IonCol>
                        <div className="loginTitle">
                            <h2>Login</h2></div>
                    </IonCol>
                </IonRow>
                <form noValidate >
            
                    <IonItem>
                    
                    <IonInput name="email" type="email" placeholder="Email" spellCheck={false} autocapitalize="off"
                        required>
                    </IonInput>
                    </IonItem>
    {/* 
                    <IonText color="danger">
                    <p className="ion-padding-start">
                        Email is required
                    </p>
                    </IonText> */}
                    <br/>
                    <IonItem>
                    
                    <IonInput name="password" clear-input="true" type="password" placeholder="Password" spellCheck={false} autocapitalize="off"
                        required>
                    </IonInput>
                    </IonItem>
    
                    {/* <IonText color="danger">
                    <p className="ion-padding-start">
                        Username is required
                    </p>
                    </IonText> */}



                <IonText color="light">
                        <p id="forgotPassword">Forgot Password?</p>
                </IonText>
    
                <IonRow>
                    {/* <IonCol>
                    <IonButton type="submit" expand="block">Login</IonButton>
                    </IonCol>*/}
                    <IonCol> 
                    <IonButton routerLink="/userMain" type="submit"color="light"expand="block">Login</IonButton>
                    </IonCol>
                </IonRow>
                </form>
                
                <IonRow>
    
                    <IonCol>
                        <IonText>
                            <p>OR</p>


                            <p><span className="text">Already have an Account? </span>
                            <IonButton  routerLink="/userSignUp"size="small" fill="outline" color="light">
                                SignUp
                            </IonButton></p>
                        </IonText>

                        
                    </IonCol>    
                </IonRow>

                </div>
    
            </div>
    
            </IonContent>
    
            </IonPage>
        )

    }
}


export default Login