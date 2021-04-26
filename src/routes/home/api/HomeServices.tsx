import { http_node } from "../../../core/http";

export default class HomeService {

  public async getHomeData( user_id: string | number): Promise<IHomeData> {
    return http_node
      .get(`/home/datos/${user_id}`)
      .then(res => res.data);
  }

}

export type IHomeData = {
  tipoDocumento: number;
  NumDocumento: number;
  Celular: number;
  Placa: string;
  message: string;
};