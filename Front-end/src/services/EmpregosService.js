import axios from "axios";

const EMPREGOS_BASE_REST_API_URL = "https://beyoudeploy.herokuapp.com/empregos"

class EmpregosService{
    getAllEmpregos(){
        return axios.get(EMPREGOS_BASE_REST_API_URL);
    }

    createEmpregos(empregos){
        return axios.post(EMPREGOS_BASE_REST_API_URL, empregos);
    }

    getEmpregosPorId(empregosId){
        return axios.get(EMPREGOS_BASE_REST_API_URL + "/" + empregosId);
    }

    updateEmpregos(empregosId, empregos){
        return axios.put(EMPREGOS_BASE_REST_API_URL + "/" + empregosId, empregos);
    }

    deleteEmpregos(empregosId){
        return axios.delete(EMPREGOS_BASE_REST_API_URL + "/" + empregosId);
    }
}

export default new EmpregosService();