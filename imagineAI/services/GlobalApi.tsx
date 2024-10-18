import CreateUser from "@/types/userTypes";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_IP_ADDRESS}:1337/api`,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
});

const GetUerInfo = (email: string) =>axiosClient.get("/user-lists?filter[userEmail][$eq]=" + email);
const CreateNewUser = (data: CreateUser) =>axiosClient.post("/user-lists", { data: data });

// const GetUerInfo = async (email: string) => {
//   try {
//     const response = await axiosClient.get(
//       "/user-lists?filter[userEmail][$eq]=" + email
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
// const CreateNewUser = async (data: any) => {
//   try {
//     const response = await axiosClient.post("/user-lists", { data: data });
//     return response;
//   } catch (e) {
//     console.log(JSON.stringify(e));
//   }
// };

export default { GetUerInfo, CreateNewUser };
