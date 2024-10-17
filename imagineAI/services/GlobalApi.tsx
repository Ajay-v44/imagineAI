import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_IP_ADDRESS}:1337/api`,
  headers: {
    "Authorization": `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
});

const GetUerInfo = async (email: string) => {
    try {
      const response = await axiosClient.get("/user-lists?filter[userEmail][$eq]=" + email);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
export default GetUerInfo;
