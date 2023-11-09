import footerLogo from "../../../assets/images/logo-adopt.png";

function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="bg-purple-progress py-40 text-white text-lg"
      >
        <div className="container mx-auto">
          <div className="sm:flex mb-4">
            <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
              <img
                src={footerLogo}
                alt=""
                className="mb-3"
                style={{ height: "100px" }}
              />
              <p className="font-light">Helps people find a pet</p>
            </div>
            <div className="sm:w-1/4 h-auto">
              <div className="mb-8 font-bold">Explore</div>
              <ul className="font-light">
                <li className="mb-3">Our Services</li>
                <li className="mb-3">Rescue a pet</li>
                <li className="mb-3">Donate</li>
                <li className="mb-3">Shareholder</li>
              </ul>
            </div>

            <div className="sm:w-1/4 h-auto">
              <div className="mb-8 font-bold">Office</div>
              <ul className="font-light">
                <li className="mb-3">+021 2208 1996</li>
                <li className="mb-3">Komplek Forest City, Bandung</li>
                <li className="mb-3">No.12 (Pet Adopt)</li>
                <li className="mb-3">petadopt@mail.id</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
