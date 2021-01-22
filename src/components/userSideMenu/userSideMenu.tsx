import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, cardOutline,cardSharp,mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, giftOutline, giftSharp, informationCircleOutline, informationCircleSharp, analyticsOutline, analyticsSharp } from 'ionicons/icons';
  import './userSideMenu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Payments',
      url: '/userMain/payments',
      iosIcon: cardOutline,
      mdIcon: cardSharp,

    },
    {
      title: 'Free Delivery',
      url: '/userMain/freedelivery',
      iosIcon: heartOutline,
      mdIcon: heartSharp
      // iosIcon: paperPlaneOutline,
      // mdIcon: paperPlaneSharp
    },
    {
      title: 'Delivey History',
      url: '/page/Favorites',
      iosIcon: analyticsOutline,
      mdIcon: analyticsSharp,
    },
    {
      title: 'Promotions',
      url: '/page/promotions',
      iosIcon: giftOutline,
      mdIcon: giftSharp
    },
    {
      title: 'About',
      url: '/page/Trash',
      iosIcon: informationCircleOutline,
      mdIcon: informationCircleSharp
    },
  ];
  
  // const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  const UserSideMenu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="usermain" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Alexander</IonListHeader>
            <IonNote>View Profile</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
          {/* <IonList id="labels-list">
            <IonListHeader>Labels</IonListHeader>
            {labels.map((label, index) => (
              <IonItem lines="none" key={index}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </IonList> */}
        </IonContent>
      </IonMenu>
    );
  };
  
  export default UserSideMenu;
  