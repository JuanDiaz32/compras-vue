import axios from "axios";

class ProductoService{
    url="http://192.168.17.108:8080/producto";
    // Spring boot

    obtenerTodos(){
        return axios.get(`${this.url}/todos`);
    }

}export default new ProductoService();