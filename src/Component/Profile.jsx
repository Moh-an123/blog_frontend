import { AvatarIcon, Card, CardBody, CardHeader } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "../backendurl";
const Profile = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const [Data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/getprofile/${data.author_id}`
        );
        console.log(response.data);

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="  mt-8  p-20 flex flex-col justify-center items-center ">
      <div className="w-10/12 bg-black shadow-xl">
        <Card className="w-[90%] flex flex-col justify-center items-center">
          <CardHeader className="flex justify-center">
            <div className="h-28 w-28">
              <AvatarIcon />
            </div>
          </CardHeader>
          <CardBody className="flex flex-col mx-auto justify-start ">
            <div>
              <h1>Name:{data.name}</h1>
              <h2>Email:{data.email}</h2>
              <h3>Author id:{data.author_id}</h3>
              <h2>Total posts:{data.no_of_posts}</h2>
              <h4>Joined Date:{data.date}</h4>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
