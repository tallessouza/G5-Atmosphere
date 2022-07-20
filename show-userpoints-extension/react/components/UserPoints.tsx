import { string } from "prop-types";
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState
} from "react";
// import { ContentWrapper } from "vtex.my-account-commons";
import { Query } from "react-apollo";

import getUserEmail from "../graphql/getUserEmail.gql";
// import getUserOrders from "../graphql/getUserOrders.gql";

async function fetchUsers() {
  const usersList = await fetch(
    "https://bh2wxvl7o0.execute-api.sa-east-1.amazonaws.com/Prod/",
    {
      method: "GET"
    }
  );
  const data = await usersList.json();

  return data;
}

const UserPoints: FunctionComponent<Props> = () => {
  const [users, setUsers] = useState([{ id: string, name: string }]);
  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
    });
  });
  return (
    <>
      <h1> Meus Pontos </h1>
      <Query query={getUserEmail}>
        {({ loading }: any) => {
          if (loading) {
            return <p> Carregando ...</p>;
          }
          return <> {users.map(user => user.id + " ")} </>;
        }}
      </Query>
    </>
  );
};

type Props = {
  render: (args: { label: string; value: string }[]) => ReactElement;
};

export default UserPoints;
