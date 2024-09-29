import { AvatarIcon, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const Profile = () => {
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
          <div><h1>Name:</h1>
          <h2>Email:</h2>
          <h3>Author id:</h3>
          <h2>Total posts:</h2>
          <h4>Joined Date:</h4></div>
          
        </CardBody>
      </Card>
      </div>
    </div>
  );
};

export default Profile;
