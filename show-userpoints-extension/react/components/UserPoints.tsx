/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, ReactElement, useState } from "react";
// import { ContentWrapper } from 'vtex.my-account-commons'
// import { Query } from "react-apollo";
import axios from "axios";

// import getUserEmail from "../graphql/getUserEmail.gql";

const UserPoints: FunctionComponent<Props> = () => {
  const [email, setEmail] = useState();
  const [points, setPoints] = useState();

  axios.get(`/api/sessions?items=*`).then(res => {
    setEmail(res.data.namespaces.authentication.storeUserEmail.value);
  });

  axios
    .get(`https://talles--atmosphere.myvtex.com/_v/app/points/${email}`)
    .then(res => {
      setPoints(res.data[0].dpoints);
    });

  return (
    <div>
      <h1> Meus Pontos </h1>
      <h2>Que legal! Você possui {points} pontos</h2>
    </div>
  );
};

type Props = {
  render: (args: { label: string; value: string }[]) => ReactElement;
};

export default UserPoints;
