import Cardcontent from "./Card";
import Hero from "./Hero";
import card1 from "./../assets/card1.jpg";
import card2 from "./../assets/card2.jpg";
import card3 from "./../assets/card3.jpg";
import Cardkegiatan from "./Cardkegiatan";
import kegiatan1 from "./../assets/card1.jpg"
import kegiatan2 from "./../assets/card2.jpg"
import kegiatan3 from "./../assets/card3.jpg"

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>International University</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12">
            <Cardcontent img={card1} judul="Learning" desc="ekstra kulikuler" />
          </div>
          <div className="col-lg-4 col-12">
            <Cardcontent img={card2} judul="Sport" desc="ekstra kulikuler" />
          </div>
          <div className="col-lg-4 col-12">
            <Cardcontent img={card3} judul="Holiday" desc="ekstra kulikuler" />
          </div>
        </div>
        <div className="row">
            <div className="col-12 text-center my-5">
                <h1>Kegiatan</h1>
            </div>
            <div className="col-lg-4 col-12">
                <Cardkegiatan image={kegiatan1} des="ini deskripsi kegiatan"/>
            </div>
            <div className="col-lg-4 col-12">
                <Cardkegiatan image={kegiatan2} des="ini deskripsi kegiatan"/>
            </div>
            <div className="col-lg-4 col-12">
                <Cardkegiatan image={kegiatan3} des="ini deskripsi kegiatan"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
