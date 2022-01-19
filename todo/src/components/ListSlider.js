const ListSlider = (props) => {
  return (
    <div className="slider">
      <button className="sliderItem sliderArrow">&lt;-</button>

      <button className="sliderItem">1</button>
      <button className="sliderItem">2</button>
      <button className="sliderItem">3</button>
      <button className="sliderItem">4</button>
      <button className="sliderItem">5</button>

      <button className="sliderItem sliderArrow">-&gt;</button>
    </div>
  );
};

export default ListSlider;
