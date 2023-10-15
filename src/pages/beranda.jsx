import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Beranda = () => {
  const gradientStyle = {
    background: 'linear-gradient(116deg, #F39D19 59.54%, #F1F3F2 0%)',
  };
  return (
    <div className="">
      <div className="m-auto fixed w-full">
        <Header />
      </div>

      {/* landing page */}
      <div className="landing flex w-full h-screen">
        <div className="left w-[60%] pl-[105px]">
          <div className="wrap  h-full flex flex-col justify-center">
            <div className="head text-[105px] font-extrabold leading-[100px]">
              Basketball <br />
              <span className="text-primary">Store</span>
            </div>
            <div className="subhead text-[18px] mt-8 w-[90%]">
              Slam Dunk Basketball Store is your premier destination for all
              things basketball. Discover the latest equipment, NBA jerseys,
              basketball shoes, and high-quality accessories. Find special
              offers and friendly customer service. Visit our store today!
            </div>
            <div className="btn mt-6">
              <a
                className="bg-primary p-2 px-5 rounded border-red-500 inline-block hover:bg-[#B7750F]"
                href="/tentang"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
        <div className="right w-[40%]">
          <img src="Images/home.png" alt="" />
        </div>
      </div>
      {/* landing page */}

      {/* build */}
      <div className="build bg-srBlack2">
        <div className="wrap container m-auto flex pt-[140px] pb-[140px]">
          <div className="left w-[50%]">
            <div className="head text-[87px]">
              BUILD AN <br /> AGGRESIVE FIT
            </div>
            <div className="subhead text-[19px] mt-5">
              Elevate Your Style Game: A Step-by-Step Approach to Crafting an
              Aggressive Wardrobe That Turns Heads
            </div>
          </div>
          <div className="right w-[50%] bg-primary flex flex-wrap justify-center p-5 gap-5">
            <Card title="BEST TRAINERS">
              li Europan Lingues es membres del sem
            </Card>
            <Card title="BEST TRAINERS">
              li Europan Lingues es membres del sem
            </Card>
            <Card title="BEST TRAINERS">
              li Europan Lingues es membres del sem
            </Card>
            <Card title="BEST TRAINERS">
              li Europan Lingues es membres del sem
            </Card>
          </div>
        </div>
      </div>
      {/* build */}

      {/* special */}
      <div className="special py-28">
        <div className="wrap bg-primary p-16 px-24 w-[980px] rounded-tl-[30px] rounded-br-[30px] mx-auto relative flex" style={gradientStyle}>
          <div className="left">
            <div className="head text-[35px] font-bold bg-srBlack2 p-2 px-4 rounded italic inline-block">
              DUNK OF SPECIAL
            </div>
            <div className="dis font-bold text-[55px]">
              DISCOUNT <br />
              30% OFF
            </div>
            <div className="Subhead text-[20px] text-srBlack">
            Every Saturday and Sunday
            </div>
          </div>
          <div className="right  absolute right-0 bottom-0">
            <img className="" src="Images/diskon.png" alt="" />
          </div>
        </div>
      </div>
      {/* special */}

      {/* Footer */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
      {/* Footer */}
    </div>
  );
};

export default Beranda;
