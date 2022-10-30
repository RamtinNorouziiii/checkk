import { AxiosErrorHandler } from "./axiosErrorHandler";

export const FailHandler=(error)=>{
 
return AxiosErrorHandler(error)
}