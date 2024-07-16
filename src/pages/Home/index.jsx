import { Header, Button, NavbarButton } from "@/components/common";
import {
  WelcomeBanner,
  HomeBanner,
  BrandLineup,
  FeaturesCard,
} from "@/components/Home";

import brands from "@/data/brandList.json";
import servicesData from "@/data/servicesList.json";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "@/contexts/Context";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function HomePages() {
  // const selectGender = (gender) => {
  //   const { setUser } = useContext(AppContext);

  //   return setUser((prev) => ({
  //     ...prev,
  //     gender: gender,
  //   }));
  // };
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    const fetchGenders = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/gender');
        setGenders(response.data);
      } catch (error) {
        console.error("There was an error fetching the genders!", error);
      }
    };

    fetchGenders();
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto md:max-w-2xl">
      <Header />
      <WelcomeBanner />
      <div className=" flex flex-row justify-center align-middle font-semibold gap-10 my-4">
        {genders.map((gender) => (
          <Link key={gender.id} to={`/${gender.name}`}>
            <Button
              text={gender.name.charAt(0).toUpperCase() + gender.name.slice(1)}
              type={"home"}
              onClick={() => selectGender(gender.name)}
            />
          </Link>
        ))}
      </div>
      <HomeBanner />
      <BrandLineup items={brands} />
      <FeaturesCard items={servicesData} />
      <NavbarButton />
    </div>
  );
}
