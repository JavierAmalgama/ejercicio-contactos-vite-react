import React, { useEffect, useState } from "react";
import ListItem from "../../components/ListItem";
import { getContacts } from "../../actions";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import "./DashboardPage.scss";
import DashboardTable from "../../components/DashboardTable/DashboardTable";

const DashboardPage = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getContacts()
      .then((contactList) => setContactList(contactList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard">
        <div className="top">
          <div className="left">
            <p>Contacts/</p>
            <h3>Contacts</h3>
          </div>
          <div className="right">
            <ButtonPrimary text="Add Contact"></ButtonPrimary>
          </div>
        </div>
        <div className="bottom">
          <DashboardTable />
        </div>
      </div>
      {/* <ul>
        {contactList.map((contact) => {
          return (
            <ListItem
              key={contact.id}
              imgSrc={contact.avatar_urls[24]}
              name={contact.name}
              number={contact.user_phone}
              email={contact.user_email}
              village={contact.user_village}
              link={`/user-detail/${contact.id}`}
            />
          );
        })}
      </ul> */}
    </div>
  );
};

export default DashboardPage;
