import {Module, Store} from "vuex";
import {RootState} from "@/store/types";
import {NotifState, Notification, NotificationInput} from "@/store/modules/notifications/types";

const COLOR_SUCCESS:string = '#20C305';
const COLOR_WARNING:string = '#61c395';
const COLOR_ERROR:string = '#f13939';
let notif_id = 0;


const auth_module: Module<NotifState, RootState> = {
    namespaced: true,
    state: {
        items: []
    },
    mutations: {

    },
    actions: {
        add(store, data:NotificationInput){

            let id = notif_id++;
            // let color = data.color || NOTIF_COLOR;
            let type = data.type || 'success';
            let duration = data.duration || 5000;
            let color = COLOR_SUCCESS;

            switch (type) {
                case 'success':
                    color = COLOR_SUCCESS;
                    break;
                case 'error':
                    color = COLOR_SUCCESS;
                    break;
                case 'warning':
                    color = COLOR_ERROR;
                    break;

            }

            let item:Notification = {
                id: id,
                title: data.title,
                message: data.message,
                color: color,
                duration: 5000
            };


            setTimeout(()=>{
                for(var i=0; i < store.state.items.length; i++){
                    let item = store.state.items[i];
                    if(item.id === id){
                        store.state.items.splice(i,1)
                    }
                }
            }, duration);
            store.state.items.push(item);
        }
    },
    getters: {

    }
};

export default auth_module;
