import axios from "axios";

class EnvioService{
    url="http://192.168.17.108:8080/envio";

    obtenerTodos(){
        return axios.get(`${this.url}/todos`);
    }
}
export default new EnvioService();