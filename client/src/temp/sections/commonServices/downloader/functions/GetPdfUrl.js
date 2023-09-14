import axios from "axios";

const getPdfUrl = async (data) => {
  try {
    const result = await axios.post(
      "http://localhost:5002/give_pdf",
      data,
      { responseType: "blob" }
    );
    console.log(result);
    const pdf = await result.data;
    const url = window.URL.createObjectURL(pdf);
    return url;
  } catch (err) {
    throw err;
  }
};

export default getPdfUrl;
