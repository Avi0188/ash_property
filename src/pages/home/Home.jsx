import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./home.css";
import homeproperty from "../../assets/homeproperty.jpg";
import Heading from "../../components/heading/Heading";
import Carousel from "../../components/Carousel";
import Profile from "../../components/Profile/Profile";
import storeimage from "../../assets/storeimage.png"
const Home = () => {
  // Define array of card details
  const cardDetails = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Mini Flat in lekki",
      area: "N 2,500,000/sq f",
      capacity: "3 Bed 2 bath",
      manager: "Managed by JR Developers",
    },
    {
      id: 2,
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Mini Flat in lekki",
      area: "N 2,500,000/sq f",
      capacity: "3 Bed 2 bath",
      manager: "Managed by JR Developers",
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Mini Flat in lekki",
      area: "N 2,500,000/sq f",
      capacity: "3 Bed 2 bath",
      manager: "Managed by JR Developers",
    },
  ];

  const [isMouseEnt, setMouseEnt] = useState(false);

  const handleMouse = () => {
    setMouseEnt(!isMouseEnt);
  };

  return (
    <>
      <div className="propertyImage">
        <Navbar />
        <div className="main-img">
          <div className="details">
            <div className="title">
              <div className="line"></div>
              <p>We are Offering the</p>
            </div>
            <div className="desc">
              <h1 className="heading">Best Real Estate Deals</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="btn">
              <button>More Details</button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Section */}
      <div className="main-section">
        <div className="section">
          <Heading
            head={"Featured Properties"}
            para={`Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan
          arcu erat donec massa pulvinar. Rutrum pharetra id risus interdum.
          Donec proin quis mauris neque`}
          />
          {/* card component */}
          <div className="card-section">
            {cardDetails?.map((card) => (
              <Carousel card={card} />
            ))}
          </div>
          <div style={{ marginTop: "80px" }}>
            <Heading
              head={"Meet our Designer"}
              para={`Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus 
vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam.`}
            />
          </div>
          {/* profile */}
          <div
            className="profile-sec"
            style={{
              boxShadow: `${
                isMouseEnt
                  ? "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
                  : ""
              }`,
            }}
            onMouseEnter={setMouseEnt}
          >
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>

{/* top-rated-property */}

          <div className="top-rated-prop-sec"> 
            <Heading
            head={"Top Rated Properties"}
            para={`Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam.`}
          />
          <div className="top-prop-cards-container">

             <div className="top-card">

{/* card 1 */}
              <div className="top-inner">
              <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjEtbcU-d-qqpFHzcw0_IuS6bHBpBftahYQ&usqp=CAU" />
              </div>
              <div className="top-card-detail">
                <h3>Mapkson Gardenia</h3>
                <span  className="buliders">Mapkson Builders</span>
                <p className="adress">Greater Kailash, Delhi</p>
                <p className="bhk">3 Bed 2 bath</p>
              </div>
              </div>

{/* card 2 */}
              <div className="top-inner">
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JDgzzj6QUUiSVjXQYySyWZ4HMI6TJxkUNw&usqp=CAU" alt="top rated" />
              </div>
              <div  className="top-card-detail">
              <h3>Mapkson Gardenia</h3>
                <span  className="buliders">Mapkson Builders</span>
                <p className="adress">Greater Kailash, Delhi</p>
                <p className="bhk">3 Bed 2 bath</p>
              </div>
               </div>

   {/* card 3 */}
              <div className="top-inner">

              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIY_ZI9ah8Rrw5dtPqaHwh829vgS8h5s1UQ&usqp=CAU" />
              </div>
              <div  className="top-card-detail">
              <h3>Mapkson Gardenia</h3>
                <span  className="buliders">Mapkson Builders</span>
                <p className="adress">Greater Kailash, Delhi</p>
                <p className="bhk">3 Bed 2 bath</p>
              </div>
             
              </div>
             </div>
             </div>
            
          </div>
         {/* property card ended here */}
          
        </div>
        <div className="storeimage">
      <img src={storeimage} alt="" />
    </div>
      </div>

    <Footer />
    </>
  );
};

export default Home;
