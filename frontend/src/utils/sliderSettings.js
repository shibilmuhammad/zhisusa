var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="flex space-x-4"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="flex justify-center">
        <div className="h-1 w-8 bg-gray-500 rounded-full"></div>
      </div>
    ),
  };
  export default settings