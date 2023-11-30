import { IFormInput } from "@/app/signup/page"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useCreateUser =()=>{
  return useMutation({
    mutationFn: async (user: IFormInput) => {
      const response = await axios.post(
        "http://localhost:8080/chat", user
      )
      return response.data
    }
  })
}