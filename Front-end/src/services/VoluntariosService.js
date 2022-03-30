import axios from "axios";

const VOLUNTARIOS_BASE_REST_API_URL = "https://beyoudeploy.herokuapp.com/voluntarios"

class VoluntariosService{
    getAllVoluntarios(){
        return axios.get(VOLUNTARIOS_BASE_REST_API_URL);
    }

    createVoluntario(voluntario){
        return axios.post(VOLUNTARIOS_BASE_REST_API_URL, voluntario);
    }

    getVoluntariosPorId(voluntarioId){
        return axios.get(VOLUNTARIOS_BASE_REST_API_URL + "/" + voluntarioId);
    }

    updateVoluntario(voluntarioId, voluntario){
        return axios.put(VOLUNTARIOS_BASE_REST_API_URL + "/" + voluntarioId, voluntario);
    }

    deleteVoluntario(voluntarioId){
        return axios.delete(VOLUNTARIOS_BASE_REST_API_URL + "/" + voluntarioId);
    }
}

export default new VoluntariosService();