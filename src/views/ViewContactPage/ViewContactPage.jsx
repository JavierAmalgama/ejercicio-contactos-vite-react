import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import "./ViewContactPage.scss";
import avatar from "../../assets/images/Avatar.png";
const ViewContactPage = () => {
  return (
    <div className="view-contact-page">
      <div className="contact">
        <div className="top">
          <div className="left">
            <p>Contacts / Contact information</p>
            <div className="image-name">
              <img src={avatar} alt="" />
              <h3>Kahashi Hatake</h3>
            </div>
          </div>
          <div className="right">
            <ButtonPrimary link="/edit-contact" text="Edit" />
            <ButtonSecondary link="/delete-contact" text="Delete" />
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default ViewContactPage;
