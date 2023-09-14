import axios from "axios";

const getProfileData = async (loginToken) => {
  try {
    const result = await axios.post(
      "http://localhost:5002/ewriter/giveprofiledata",
      { loginToken }
    );
    const data = result.data;
    const profileData = {
      fullName: data.full_name,
      age: data.age,
      gender: data.gender,
      country: data.country,
      occupation: data.occupation,
    };
    return profileData;
  } catch (err) {
    throw err;
  }
};

export default getProfileData;
