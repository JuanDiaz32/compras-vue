import axios from "axios";

class CompraService {
    compras = [];
    url="http://192.168.17.108:8080/compra"

    constructor() {
        this.compras = [
            
        ];
    }

    obtenerTodos() {
        return this.compras;
    }

    registrar(compra){
        return axios.post(`${this.url}`, compra);
    }

    obtenerPorCliente(){

        let id = localStorage.id;
        return axios.get(`${this.url}/cliente/${id}`);
    }

} export default new CompraService();