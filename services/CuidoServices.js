import axios from "axios";

export const GetAllCuido= async()=>{
    const request= await axios.get(process.env.NEXT_PUBLIC_SERVER+"CuidoAll")
    const data= await request.data
    return data
}