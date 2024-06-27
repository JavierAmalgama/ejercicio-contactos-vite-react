import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { getContacts } from "../actions";

const DashboardPage = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getContacts()
      .then((contactList) => setContactList(contactList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {contactList.map((contact) => {
        return (
          <ListItem
            imgSrc={contact.avatar_urls[24]}
            name={contact.name}
            number={contact.user_phone}
            email={contact.user_email}
            village={contact.user_village}
            link={`/user-detail/${contact.id}`}
          />
        );
      })}
    </ul>
  );
};

export default DashboardPage;
