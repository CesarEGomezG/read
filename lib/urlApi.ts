let urlApi = "http://localhost:3000/api";
if(process.env.NEXT_PUBLIC_URL_API) urlApi = process.env.NEXT_PUBLIC_URL_API;

export default urlApi;