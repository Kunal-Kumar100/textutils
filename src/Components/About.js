export default function About(props) {
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#09092e" }}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#09092e" : "White",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse  collapse show "
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#09092e" : "White",
            }}>
            <div
              className="accordion-body"
              style={{ color: props.mode === "dark" ? "White" : "#09092e" }}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#09092e" : "White",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#09092e" : "White",
            }}>
            <div
              className="accordion-body"
              style={{ color: props.mode === "dark" ? "White" : "#09092e" }}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#09092e" : "White",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#09092e" : "White",
            }}>
            <div
              className="accordion-body"
              style={{ color: props.mode === "dark" ? "White" : "#09092e" }}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      {/* Button to toggle between light/dark mode  */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.toggleMode}>
        {props.btnText}
      </button>
    </div>
  );
}
