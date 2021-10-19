import axios from "axios";

class ClienteService{
    url="http://192.168.17.108:8080/cliente";

    validar(miUsuario, miPassword){
        let datos = {
            usuario: miUsuario,
            password: miPassword
        };
        return axios.post(`${this.url}/validar`,datos);
    }

    obtenerCliente(){

        let id = localStorage.cliente;
        return axios.get(`${this.url}/${id}`);
    }

}export default new ClienteService();