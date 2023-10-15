/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useState } from "react"
import axios from "axios";

const Tentang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/dadjokes?limit=1',{
      headers: { 'X-Api-Key': 'loZiraunTsZCJZ+LSuRlCQ==TD6rLCH5PPs5nXmr'}
    })
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="m-auto fixed w-full">
        <Header />
      </div>
      {/* main content */}
      <div className="bg-srBlack py-[100px] mx-auto container">
        <div className="wrap flex justify-center items-center">
          <div className="left w-[60%]">
            <img src="Images/Tentang.png" alt="" />
          </div>
          <div className="right w-[40%]">
            <div className="head text-[40px] font-extrabold italic text-center">ABOUT <br /> SLUM <span className="text-primary">DUNK</span></div>
            <div className="text mt-2 text-center">
            Slum Dunk is a basketball store that provides high-quality gear and equipment for basketball enthusiasts. With knowledgeable staff committed to delivering top-notch service, we are the go-to destination for basketball players, from beginners to professionals. We offer products from leading basketball brands and strive to support and promote the sport within the local community. Slum Dunk is your best choice for all your basketball needs.
            </div>
            <div className="est italic font-bold text-primary text-center mt-5">
              EST.2020
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      {/* dad joke api */}
      <div className="bg-srBlack2">
        <div className="wrap container mx-auto py-[100px] flex justify-center items-center">
          <div className="card bg-primary w-[800px] h-[350px] p-10">
            <div className="head text-[40px] font-bold text-center text-srBlack2">Dunk and Laugh Corner</div>
            <div className="joke text-center">Take a break and check out these dad jokes</div>
            <button className="bg-srWhite text-srBlack px-4 py-2  mt-2 mb-3 block mx-auto" onClick={fetchData} disabled={loading} >Get Joke</button>
            <div className="text mt-2 text-center text-srBlack text-[20px]">{data.joke}</div>
          </div>
        </div>
      </div>
      {/* dad joke api */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
    </div>
  )
}

export default Tentang