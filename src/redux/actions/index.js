import endpointSample from "../../api/endpointSample";
import { InitMap } from '../../utils/maputils'
export const fetchData =  () => async dispatch => {
    const response = await endpointSample.get('/posts')
    dispatch({type : 'FETCH_DATA',payload : response.data})
}
export const MapInit =  () => dispatch => {
    const map = InitMap()
    dispatch({type : 'INIT_MAP',payload : map})
}

