import axios from "axios";

const CURSOS_BASE_REST_API_URL = "https://beyoudeploy.herokuapp.com/cursos"

class CursosService{
    getAllCursos(){
        return axios.get(CURSOS_BASE_REST_API_URL);
    }

    createCursos(curso){
        return axios.post(CURSOS_BASE_REST_API_URL, curso);
    }

    getCursosPorId(cursoId){
        return axios.get(CURSOS_BASE_REST_API_URL + "/" + cursoId);
    }

    updateCursos(cursoId, curso){
        return axios.put(CURSOS_BASE_REST_API_URL + "/" + cursoId, curso);
    }

    deleteCursos(cursoId){
        return axios.delete(CURSOS_BASE_REST_API_URL + "/" + cursoId);
    }
}

export default new CursosService();