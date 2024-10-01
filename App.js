import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import { Notification } from './src/Notification/NotifService';
import { navigationRef} from './src/Notification/NavigationService';




export default class App extends Component {
  componentDidMount() {
      Notification.configurar(this.handleNotificationOpen)
      Notification.criarCanal()
      Notification.agendarNotificacoes()
  }

  componentWillUnmount() {
      clearInterval(this.intervalID);
  }
  handleNotificationOpen = (notification) => {
    if (notification.userInteraction) {
      navigationRef.current?.navigate('Produtos'); 
    }
  }

  onPressEnviarNotificacao = () => {
    const message = [
        {title: "Novos verdinhas", message: "Novo carregamento chegando nos produtos, venha ver😎"},
        
    ];

   
    Notification.mostrarNotificacao(
      1, 
      Message.title, 
      Message.message, 
      {}, 
      {}
    )
  }

  onPressCancelarNotificacoes = () => {
    Notification.cancelarTodasNotificacoes()
  }

  render() {
      return (
          <NavigationContainer ref={navigationRef}>
              <Routes />
          </NavigationContainer>
      );
  }
} 

