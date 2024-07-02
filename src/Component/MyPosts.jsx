import { Button, Card, CardBody, CardFooter, CardHeader, Image, Input, Link, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import Data from "./../../../Mockdata/Data.json";
import img1 from "./../assets/medium3.jpg";
import { GoPencil } from "react-icons/go";
import EditBlog from "./EditBlog";
const MyPosts = () => {
  const [data, setData] = useState(Data.blog);
  const [edit,setEdit]=useState(false);
  const [id,setId]=useState(null);
  const [img,setImg]=useState(img1);
  const handleClick=(id)=>{
   setEdit(true);
   setId(id);
console.log(id);
  }
  const view =
    data &&
    data.map((d) => {
      if (d.id == 1 && d.authorname === "Alice") {
        console.log(d, d.id, d.id == 1);
        return (
          <Card key={d.id}>
            <CardHeader>
              <h1>{d.authorname}</h1>
            </CardHeader>
            <CardBody>
              <p>{d.id}</p>
              <div className=" grid grid-cols-2 gap-10 m-5">
                {d.posts.map((e) => {
                  return (<>
                   {e.posttitle!==id&&
                    <Card>
                      <CardHeader className="flex justify-between">
                      <h1>{e.posttitle}</h1>
                    <GoPencil onClick={()=>handleClick(e.posttitle)} />
                       {/* {edit&&e.posttitle===id&&
                      <>
                      <EditBlog  {...e}/>
                      </>
                       } */}
                      </CardHeader>
                      <CardBody>
                        {e.postbody}
                        <Image alt="image1" src={img1} />
                      </CardBody>
                    </Card>
                }
                {
                  edit&&e.posttitle===id&&
                  <>
                    <Card className="w-full col-span-2">
                      <CardHeader className="flex justify-center items-center">
                        <Input  type='text' value={e.posttitle} width={300} className="w-96"/>
                     
                      </CardHeader>
                      <CardBody className="flex justify-center items-center">
                       <Input type="text" value={e.postbody} className="w-96 py-10"/>
                      {/* <Input type="file" value={img1} />
                       */}
                       <label>
                        <input 
                        type="file"
                        onChange={(e)=>{setImg(URL.createObjectURL(e.target.files[0]))}}
                        className="hidden"
                        />
                        <Button
                        variant="flat"
                        color="danger"
                        isIconOnly
                        as='span'
                        className="w-40"
                        >
                          Change Image
                        </Button>
                       </label>
                       <Image  src={img} width={400} height={400}/>
                        {/* <Image alt="image1" src={img1} /> */}
                      </CardBody>
                      <CardFooter>
                        <Button color="success" onClick={()=>{setEdit(false); setId(null)}}>Save</Button>
                      </CardFooter>
                    </Card>
                  </>
                }
                    </>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        );
      }
    });
  return (
    <div className="pt-16" key={"llo9"}>
      {/* <Card>
                <CardHeader>
                    <h1>{"d.title"}</h1>
                </CardHeader>
                <CardBody>
                    <p>{"d.title"}</p>
                    <Image 
                    alt='image1'
                    src='./../assets/medium.jpg'
                    />
                </CardBody>
            </Card> */}
      {view}
    </div>
  );
};

export default MyPosts;
