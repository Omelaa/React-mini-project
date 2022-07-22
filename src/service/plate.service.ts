import {AxiosResponse} from "axios";

import {urls} from "../constants";
import {PlateInterface} from "../Interfaces";
import {axiosService} from "./axios.service";

type Res<T> = Promise<AxiosResponse<T>>;

const plateService = {
    getAll: (): Res<PlateInterface[]> => axiosService.get(urls.plates)
}

export {plateService};