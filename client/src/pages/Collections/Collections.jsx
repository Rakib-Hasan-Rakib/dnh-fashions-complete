import { useEffect, useState } from "react";
import SingleCollection from "./SingleCollection";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/shared/sectionTitle/SectionTitle";
import Container from "../../components/shared/Container";

const Collections = () => {
  const [allDress, setAllDress] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState("");
  // const [selectedRatingOpt, setSelectedRatingOpt] = useState("");

  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/allDress")
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
    fetch("https://dnh-fashion-server.vercel.app/allDress")
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "default") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);

  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/category/mens")
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "male") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);
  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/category/womens")
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "female") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);
  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/category/childrens")
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "children") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);

  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/rating/4.5")
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "fourAndHalf") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);
  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/rating/4")
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "four") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);
  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/rating/3.5")
      .then((res) => res.json())
      .then((data) => {
        if (selectedOpt === "threeAndHalf") {
          setAllDress(data);
        }
      });
  }, [selectedOpt]);

  return (
    <>
      <Helmet>
        <title>D&H Fashions Ltd. | Collections</title>
      </Helmet>
      <Container>
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <p className="md:text-lg font-semibold capitalize">
              filter by ratings
            </p>
            <select
              onChange={handleSelect}
              defaultValue={"default"}
              name=""
              id=""
              className="focus:outline-none rounded-sm bg-red-500 text-white"
            >
              <option value="default">All Dress</option>
              <option value="fourAndHalf">4.5+</option>
              <option value="four">4+</option>
              <option value="threeAndHalf">3.5+</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {allDress?.map((dress) => {
            return <SingleCollection key={dress._id} singleDress={dress} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default Collections;
