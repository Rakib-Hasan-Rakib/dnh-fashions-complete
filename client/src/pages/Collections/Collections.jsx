import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/shared/sectionTitle/SectionTitle";
import Card from "../../components/shared/card/Card";
import axios from "axios";
import Container from "../../components/shared/Container";
import "./collection.css";
import { FaSearch } from "react-icons/fa";
import DataNotFoundAnim from "../../components/shared/animations/DataNotFoundAnim";

const Collections = () => {
  const [allDress, setAllDress] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedOpt, setSelectedOpt] = useState(null);

  const getAllDressReq = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allDress`)
      .then((data) => setAllDress(data.data))
      .catch((err) => console.log(err));
  };
  const getSearchedDressReq = () => {
    axios
      .get(`http://localhost:3000/dressSearch/${searchText}`)
      .then((data) => {
        if (data.data.length > 0) {
          setAllDress(data.data);
        } else {
          setAllDress([]);
        }
      });
  };

  useEffect(() => {
    getAllDressReq();
  }, []);

  const handleSearch = () => {
    if (searchText.length > 0) {
      getSearchedDressReq();
    } else {
      getAllDressReq();
    }
  };

  useEffect(() => {
    if (searchText.length > 0) {
      getSearchedDressReq();
    } else {
      getAllDressReq();
    }
  }, [searchText]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/category/${selectedOpt}`)
      .then((data) => {
        setAllDress(data.data);
      })
      .catch((err) => console.log(err));
  }, [selectedOpt]);

  return (
    <>
      <Helmet>
        <title>D&H Fashions Ltd. | Collections</title>
      </Helmet>
      <Container>
        {SectionTitle("Browse our collection", "find your fashion here")}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-8 lg:mb-12">
          <div className="flex gap-4 relative">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              name=""
              id=""
              className="search-bar outline-none rounded-full px-4 py-2 border border-yellow-400"
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-400 p-3 rounded-full absolute right-0 top-0"
            >
              <FaSearch size={16} className="text-white" />
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <p className="md:text-lg font-semibold capitalize">
              filter by category
            </p>

            <select
              onChange={(e) => setSelectedOpt(e.target.value)}
              defaultValue={"allDress"}
              className="focus:outline-none outline-none bg-yellow-400 text-white px-8 py-2 rounded-full"
            >
              <option value="allDress">All Dress</option>
              <option value="men">Male</option>
              <option value="women">Female</option>
              <option value="children">Children</option>
            </select>
          </div>
        </div>

        {allDress.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {allDress?.map((dress, i) => {
              return <Card key={i} productInfo={dress} />;
            })}
          </div>
        ) : (
          <DataNotFoundAnim />
        )}
      </Container>
    </>
  );
};

export default Collections;
