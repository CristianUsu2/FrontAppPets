"use client"
import axios from "axios";


export const CreatePetS=async(object,config)=>{
  const request=await axios.post(process.env.NEXT_PUBLIC_SERVER+"PetsCreate",object, config)
  const data= await request.data
  return data
}

export const GetPetS= async(id)=>{
  const request= await axios.get(process.env.NEXT_PUBLIC_SERVER+"GetPet/"+ id)
  const data= await request.data
  return data
}
