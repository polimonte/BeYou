import axios from "axios";

const CASAS_BASE_REST_API_URL = "https://beyoudeploy.herokuapp.com/casasacolhimento"

class CasasAcolhimentoService{
    getAllCasas(){
        return axios.get(CASAS_BASE_REST_API_URL);
    }

    createCasa(casa){
        return axios.post(CASAS_BASE_REST_API_URL, casa);
    }

    getCasasPorId(casaId){
        return axios.get(CASAS_BASE_REST_API_URL + "/" + casaId);
    }

    updateCasa(casaId, casa){
        return axios.put(CASAS_BASE_REST_API_URL + "/" + casaId, casa);
    }

    deleteCasa(casaId){
        return axios.delete(CASAS_BASE_REST_API_URL + "/" + casaId);
    }
}

export default new CasasAcolhimentoService();