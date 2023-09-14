export const getCountriesOptions = async() => {
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    const countriesOptions = data.map((country) => ({
      value: country.name,
      label: country.name,
    }));
    const countryArray = data.map(country => country.name);
    console.log(countryArray);
    return countriesOptions;
}

export const occupationOptions = [
    { value: "collage student", label: "collage Student" },
    { value: "university student", label: "university student" },
    { value: "teacher", label: "teacher" },
    { value: "parent", label: "parent" },
    { value: "employee", label: "employee"},
  ];

export const genderOptions = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];