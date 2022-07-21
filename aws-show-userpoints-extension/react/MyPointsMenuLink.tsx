// import PropTypes from 'prop-types'

import { FunctionComponent, ReactElement } from "react";
import { InjectedIntl, injectIntl } from "react-intl";

const MyPointsMenuLink: FunctionComponent<Props> = ({ render, intl }) => {
  return render([
    {
      name: intl.formatMessage({ id: "store/userPoints.link" }),
      path: "/points"
    }
  ]);
};

// MyPointsMenuLink.propTypes = {
//   render: PropTypes.func.isRequired,
//   intl: intlShape.isRequired,
// }

type Props = {
  render: (links: { name: string; path: string }[]) => ReactElement;
  intl: InjectedIntl;
};

export default injectIntl(MyPointsMenuLink);
