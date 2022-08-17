import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '05efbf990emshe519dc4914e9b42p150ae2jsn990f873a48a0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          },
    });

    return data;
}