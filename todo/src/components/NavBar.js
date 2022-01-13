const NavBar = () => {
  return (
    <div className="slider">
      <input className="sliderItem sliderArrow" type="button" value="<-" />

      <input className="sliderItem" type="button" value="1" />
      <input className="sliderItem" type="button" value="2" />
      <input className="sliderItem" type="button" value="3" />
      <input className="sliderItem" type="button" value="4" />
      <input className="sliderItem" type="button" value="5" />

      <input className="sliderItem sliderArrow" type="button" value="->" />
    </div>
  );
};

export default NavBar;
