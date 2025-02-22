import { useEffect, useState } from "react";
import FlexDisplay from "../components/FlexDisplay";
import TicketCard from "./TicketCard";

const TicketsPage = () => {
  const getData = async () => {
    try {
      const Response = await fetch("http://test.joo.nz/tickets");
      const Convert = await Response.json();
      setUsers(Convert);
    } catch (eshag) {
      console.log(`Riiiiiid  +${eshag} SopaMAL`);
    }
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData(), [];
  });
  // console.log(users);
  return (
    <div>
      <FlexDisplay>
        {users.map((ticket, index) => {
          return <TicketCard ticket={ticket} key={index} />;
        })}
      </FlexDisplay>
    </div>
  );
};
export default TicketsPage;
