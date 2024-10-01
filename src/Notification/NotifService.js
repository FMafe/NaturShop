
import PushNotification from 'react-native-push-notification'   



class NotifService {
    criarCanal = () => {
        PushNotification.createChannel(
            {
                channelId: "notificador",
                channelName: "Notificador do app",
                channelDescription: "Meu canal de notificações do aplicativo."
            },
            (created) => console.log(`createChannel returned '${created}'`)
        )
    }
    configurar = (onNotificationOpen) => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[Notification] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[Notification] onNotification:", notification);
                if (notification.userInteraction){
                    onNotificationOpen(notification);
                }
                
            },

           
            
        });
    }

    constrirNotificacaoAndroid = (id, title, message, data={}, options={}) => {
        return {
            id: id,
            channeldId: 'notificador',
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_notification",
            bigText: message || "",
            subText: title || "",
            vibrate: options.vibrate || false,
            Vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    mostrarNotificacao = (id, title, message, data={}, options={}) => {
        PushNotification.localNotification({
            ...this.constrirNotificacaoAndroid(id, title, message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }
    agendarNotificacoes = () => {
        const messages = [
            {title: "Novos verdinhas", message: "Novo carregamento chegando nos produtos, venha ver😎"},
    
        ];
        PushNotification.localNotificationSchedule({
            channelId: "notificador",
            id: 1,
            title: messages[0].title,
            message: messages[0].message,
            date: new Date(Date.now() + 1 * 60 * 1000), 
            repeatType: "time",
            repeatTime: 1 * 60 * 1000 
        });

        
    }



    cancelarTodasNotificacoes = () => {
        PushNotification.cancelAllLocalNotifications();
    }

}

export const Notification = new NotifService();