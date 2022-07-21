import React, { FunctionComponent, useState } from "react";
import axios from "axios";

// import getUserEmail from "../graphql/getUserEmail.gql";
// import getUserOrders from "../graphql/getUserOrders.gql";

const UserPoints: FunctionComponent = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPoints, setUserPoints] = useState();

  axios.get(`/api/sessions?items=*`).then(res => {
    setUserEmail(res.data.namespaces.authentication.storeUserEmail.value);
  });

  axios
    .get(
      `https://dsfkppl2j7.execute-api.sa-east-1.amazonaws.com/Prod/${userEmail}`
    )
    .then(res => {
      setUserPoints(res.data.points_available);
    });

  return (
    <>
      <h1> Meus Pontos </h1>
      <p> Você tem {userPoints} pontos! </p>
      <small>
        Você ganha 1 ponto por cada real gasto na loja e pode conferir seus
        pedidos elegíveis na aba Pedidos .
      </small>
    </>
  );
};

export default UserPoints;
