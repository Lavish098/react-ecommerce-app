import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fugiat numquam maiores temporibus veritatis, dignissimos, aliquam
            repellendus possimus a ea error harum incidunt culpa non placeat
            cumque autem nisi dolorem ut adipisci cum? Quaerat perferendis
            explicabo in, quibusdam est ipsam. Mollitia in ipsa quia numquam et
            nisi suscipit eos harum eligendi aliquam expedita, deleniti quos
            dicta commodi! Iusto nisi illo laudantium reprehenderit, nam quidem
            molestias, corrupti nesciunt, sint dolor eos?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            assumenda libero quis aspernatur non nostrum. Voluptatum eum
            cupiditate quaerat odio. Molestias enim placeat quae deserunt veniam
            rem tenetur sapiente deleniti?
          </p>
          <b className="text-gray-800">Our Misson</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptatibus blanditiis eum eos accusantium sit laudantium,
            reprehenderit iusto minus nisi.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col text-sm md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-gray-600">Quality Assurance</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            dignissimos saepe molestias nam. Illum, a.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-gray-600">Convenince</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            dignissimos saepe molestias nam. Illum, a.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-gray-600">Exceptional Customer Service</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            dignissimos saepe molestias nam. Illum, a.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
