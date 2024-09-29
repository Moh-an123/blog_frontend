import React from "react";
import image1 from "../assets/img4.jpg";
import image2 from "../assets/img3.jpg";
import image3 from "../assets/img2.jpg";
import image4 from "../assets/img1.jpg";
import image5 from "../assets/img5.jpg";
import image from "../assets/img5-removebg-preview.png";
import { Image } from "@nextui-org/react";
const Landingpage = () => {
  return (
    <div className="landingpage">
      <div className="flex justify-center items-center mt-8 py-10">
        {/* <img src={image} alt="pic 1" className="" /> */}
        <h1 className=" font-extrabold text-9xl title ">HB</h1>
      </div>
      <div className=" grid grid-cols-3  place-content-center text-center division">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          illum, excepturi sapiente omnis eligendi numquam earum molestiae odit
          in maxime itaque quis accusantium incidunt consequatur quasi. Non
          maxime alias atque? Id officiis earum quasi tempore! Eos, ducimus qui
          voluptate ullam animi ut, at iure reiciendis nihil, nulla expedita!
          Veritatis atque, reiciendis voluptates nostrum praesentium ab! Impedit
          reprehenderit nulla rerum ea? Consequatur voluptate mollitia quidem
          sapiente quaerat omnis quibusdam qui ipsam, excepturi adipisci. Ex
          animi amet voluptate mollitia, unde repellendus non quasi maxime nulla
          eveniet consequatur ducimus aspernatur repellat consectetur
          repudiandae.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores
          fuga illum earum mollitia, vitae quae sequi doloremque sed, incidunt
          possimus, nam hic quam vel ipsum maxime illo cumque aliquid. Aliquid
          nobis pariatur maxime repellat quos nulla accusamus quam nisi iste,
          eligendi, ipsam quisquam excepturi rerum soluta a non nihil! Aut ipsa
          cumque quam sequi corporis dignissimos labore, voluptatum doloribus!
          Doloremque ullam quasi soluta sed eum non explicabo dolores alias
          quidem nostrum aliquid eos molestiae reiciendis unde consequatur vitae
          quae omnis laboriosam similique amet voluptatem quia, voluptas est
          qui? Illo!
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          similique tenetur nemo vitae iure placeat sint eius nobis totam! Harum
          a voluptas odit non impedit nostrum error molestiae vero eos? Autem
          tenetur dolore iste dicta sed omnis consectetur laudantium tempora
          eligendi facilis, maxime minus at error possimus! Nulla accusamus
          optio ducimus odit! Laboriosam quo consequatur laudantium similique
          cumque veritatis deleniti. Sed quae, doloremque vero, accusamus
          molestias voluptatibus eaque consequuntur fuga, blanditiis quod
          tempore culpa temporibus accusantium. Aliquid dolorum porro nesciunt
          commodi error velit, aperiam repudiandae asperiores nihil praesentium
          tenetur inventore.
        </div>

        <div className="  col-span-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          culpa magni eligendi. Ipsam est error voluptates commodi quisquam
          repudiandae sit saepe maxime molestiae architecto numquam velit
          consequatur, placeat iste rem. Fugiat, ab non reiciendis illo
          accusamus alias tempora vel facere? Expedita, officiis repellendus?
          Sed ab maiores excepturi voluptatum voluptatibus quos ipsum libero
          blanditiis nesciunt, maxime tempore. Corporis tempora minus explicabo?
          Repellat praesentium aliquam dignissimos ut et! Consectetur eius eos,
          ea laborum voluptatibus deleniti libero deserunt aspernatur aperiam
          vero ipsam quaerat laboriosam eaque! Porro at maiores, amet voluptate
          magni obcaecati aut!
        </div>
        <div className=" flex   flex-col items-center col-span-full">
          <img src={image1} alt="qayjg" width={200} height={100} />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid,
          illum iure quasi ipsum molestias libero blanditiis facere natus sunt
          vel error dignissimos. Delectus assumenda incidunt dicta, sed
          voluptatem quia? Minima consequuntur optio laboriosam sequi
          accusantium dicta, placeat eum, ex doloribus, consequatur architecto
          sint. Tenetur animi numquam tempora quibusdam ullam quasi dignissimos
          mollitia, sit praesentium harum dolores reprehenderit earum a. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore
          eum fuga accusamus commodi. Nam neque excepturi possimus dignissimos
          voluptatem adipisci quasi dolorem animi praesentium, labore vero rem,
          ullam assumenda.
        </div>
      </div>
      <div
        className="slider mt-20"
        style={{
          "--bg": "red",
          "--width": "200px",
          "--height": "50px",
          "--quantity": 10,
        }}
      >
        <div className="list " style={{}}>
          {/* <img src={image1} alt={image1} height={200} width={200} style={{"--position":1}} className='items'/>
        <img src={image2} alt={image2} height={200} width={200} style={{"--position":2}} className='items'/>
        <img src={image3} alt={image3} height={200} width={200} style={{"--position":3}} className='items'/>
        <img src={image4} alt={image4} height={200} width={200} style={{"--position":4}} className='items'/>
        <img src={image5} alt={image5} height={200} width={200} style={{"--position":5}} className='items'/>
        <img src={image1} alt={image1} height={200} width={200} style={{"--position":6}} className='items'/>
        <img src={image2} alt={image2} height={200} width={200} style={{"--position":7}} className='items'/>
        <img src={image3} alt={image3} height={200} width={200} style={{"--position":8}} className='items'/>
        <img src={image4} alt={image4} height={200} width={200} style={{"--position":9}} className='items'/>
        <img src={image5} alt={image5} height={200} width={200} style={{"--position":10}} className='items'/> */}
          <div className="items" style={{ "--position": 1 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 2 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 3 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 4 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 5 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 6 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 7 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 8 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 9 }}>
            {"Hello"}
          </div>
          <div className="items" style={{ "--position": 10 }}>
            {"Hello"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
