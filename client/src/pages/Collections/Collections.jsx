import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/shared/sectionTitle/SectionTitle";
import Card from "../../components/shared/card/Card";

const Collections = () => {
  const [allDress, setAllDress] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState("");
  // const [selectedRatingOpt, setSelectedRatingOpt] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allDress`)
      .then((res) => res.json())
      .then((data) => {
        setAllDress(data);
      });
  }, []);

  const handleSelect = (event) => {
    const selectedOptions = event.target.value;
    setSelectedOpt(selectedOptions);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allDress`)
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "default") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/category/mens`)
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "male") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/category/womens`)
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "female") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/category/childrens`)
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "children") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);

  return (
    <>
      <Helmet>
        <title>D&H Fashions Ltd. | Collections</title>
      </Helmet>
        {SectionTitle("Browse our collection", "find your fashion here")}
        <div className="flex justify-end items-center gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-8 lg:mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <p className="md:text-lg font-semibold capitalize">
              filter by category
            </p>
            <select
              onChange={handleSelect}
              defaultValue={"default"}
              name=""
              id=""
              className="focus:outline-none rounded-sm bg-red-500 text-white"
            >
              <option value="default">All Dress</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="children">Children</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {allDress?.map((dress) => {
            return <Card key={dress._id} productInfo={dress} />;
          })}
        </div>
    </>
  );
};

export default Collections;
