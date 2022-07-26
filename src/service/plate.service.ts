import {AxiosResponse} from "axios";

import {urls} from "../constants";
import {axiosService} from "./axios.service";
import {IPlate} from "../Interfaces";

type Res<T> = Promise<AxiosResponse<T>>;

const plateService = {
    getAll: (): Res<IPlate[]> => axiosService.get(urls.plates)
}

export {plateService};