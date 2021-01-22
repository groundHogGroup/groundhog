import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet,IonSplitPane  } from '@ionic/react';
import { IonReactRouter,} from '@ionic/react-router';
import LandingPage from './pages/landingPage/landingPage';
import WelcomePage from './pages/welcomePage/welcomePage';
import UserSignUp from './pages/user/userSignUpPage/userSignUpPage';
import RiderSignUp from './pages/rider/riderSignUpPage/riderSignUpPage';
import CompanySignUp from './pages/company/companySignUp/companySignUpPage';
import CompanyLogin from './pages/company/companyLoginPage/companyLoginPage'
import RiderLogin from './pages/rider/riderLoginPage/riderLoginPage'
import UserLogin from './pages/user/userLoginPage/userLoginPage'
import UserMain from './pages/user/userMainPage/userMain';
import RiderMain from './pages/rider/riderMainPage/riderMain';
import UserSideMenu from './components/userSideMenu/userSideMenu';
import CompanyMain from './pages/company/companyPage/companyMain';
//import CompanySideMenu from './pages/company/companySignUp/companySignUpPage';
import RiderSideMenu from './components/riderSideMenu/riderSideMenu';


/* Core CSS required for Ionic components to work properly */
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// /* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
          <IonRouterOutlet>
          <Route path="/" component={LandingPage} exact={true} />
            <Route path="/welcome" component={WelcomePage} exact={true} />
            <Route path="/userMain" component={UserMain} exact={true} />
            <Route path="/riderMain" component={RiderMain} exact={true} />   
            <Route path="/companyMain" component={CompanyMain} exact={true} />   
            <Route path="/userSignUp" component={UserSignUp} exact={true} />
            <Route path="/RiderSignUp" component={RiderSignUp} exact={true} />
            <Route path="/CompanySignUp" component={CompanySignUp} exact={true} />
            <Route path="/userlogin" component={UserLogin} exact={true} />
            <Route path="/riderlogin" component={RiderLogin} exact={true} />
            <Route path="/companylogin" component={CompanyLogin} exact={true} />
          </IonRouterOutlet>      
    </IonReactRouter>
  </IonApp>
);

export default App;

