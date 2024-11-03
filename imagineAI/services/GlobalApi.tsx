import CreateUser from "@/types/userTypes";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_IP_ADDRESS}:1337/api`,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
});

const GetUerInfo = (email: string) =>
  axiosClient.get("/user-lists?filter[userEmail][$eq]=" + email);
const CreateNewUser = (data: CreateUser) =>
  axiosClient.post("/user-lists", { data: data });
const getFeatureCategoryList = () =>
  axiosClient.get("/ai-models?filters[isFeatured][$eq]=true&populate=*");
const getAIModels = (type: string) =>
  axiosClient.get("/ai-models?filters[" + type + "][$eq]=true&populate=*");
const generateAIImages = (data: any) =>
  axios.post("http://${process.env.EXPO_PUBLIC_IP_ADDRESS}:8082/aimodel", data);
const UpdateUserCredits = (documentId, data) =>
  axiosClient.put("/user-lists/" + documentId, { data: data });
const CreateRecord = (data) =>
  axios.post("/ai-generated-images", { data: data });
const GetAllAiImages = (pagesize: number) => axiosClient.get(`/ai-generated-images?pagination[start]=${pagesize-5}&pagination[limit]=${pagesize}`)
export default {
  GetUerInfo,
  CreateNewUser,
  getFeatureCategoryList,
  getAIModels,
  generateAIImages,
  UpdateUserCredits,
  CreateRecord,
  GetAllAiImages
};
