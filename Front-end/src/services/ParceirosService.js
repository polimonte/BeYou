import axios from "axios";

const PARCEIROS_BASE_REST_API_URL = "https://beyoudeploy.herokuapp.com/parceiros"

class ParceirosService{
    getAllParceiros(){
        return axios.get(PARCEIROS_BASE_REST_API_URL);
    }

    createParceiros(parceiros){
        return axios.post(PARCEIROS_BASE_REST_API_URL, parceiros);
    }

    getParceirosPorId(parceirosId){
        return axios.get(PARCEIROS_BASE_REST_API_URL + "/" + parceirosId);
    }

    updateParceiros(parceirosId, parceiros){
        return axios.put(PARCEIROS_BASE_REST_API_URL + "/" + parceirosId, parceiros);
    }

    deleteParceiros(parceirosId){
        return axios.delete(PARCEIROS_BASE_REST_API_URL + "/" + parceirosId);
    }
}

export default new ParceirosService();