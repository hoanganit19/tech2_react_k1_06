import { GlobalContext } from "./GlobalState";

export const withContext = (Component) => (props) => (
    <GlobalContext.Consumer>
      {(context) => <Component {...context} {...props} />}
    </GlobalContext.Consumer>
  );