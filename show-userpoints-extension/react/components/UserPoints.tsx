import React, { FunctionComponent, ReactElement } from "react";
// import { ContentWrapper } from 'vtex.my-account-commons'
import { Query } from "react-apollo";

import getUserEmail from "../graphql/getUserEmail.gql";

const UserPoints: FunctionComponent<Props> = () => {
  return (
    <div>
      <h1> Meus Pontos </h1>
      <Query query={getUserEmail}>
        {({ data }: any) => {
          return (
            <p>
              {data && data.profile
                ? data.profile.email
                : "não foi possível recuperar seu email"}
            </p>
          );

          // return render([
          //   {
          //     label: "Loading",
          //     value: loading.toString()
          //   },
          //   {
          //     label: "Email do Usuário Logado",
          //     value: data && data.profile ? data.profile.email : "Loading"
          //   },
          //   {
          //     label: "Error",
          //     value: error
          //   }
          // ]);
        }}
      </Query>
    </div>
  );
};

type Props = {
  render: (args: { label: string; value: string }[]) => ReactElement;
};

export default UserPoints;
