/* eslint-disable react/display-name */
import { useLocation, useParams } from 'react-router-dom';

export function withLocationProps(WrappedComponent) {
  return (props) => {
    // eslint-disable-next-line no-unused-vars
    const { resourceName, paramsName, children, ...rest } = props || {};

    const { state } = useLocation();
    const { name } = useParams();

    return (
      <WrappedComponent
        {...{ [resourceName]: state }}
        {...{ urlParams: name }}
        {...rest}
      >
        {children}
      </WrappedComponent>
    );
  };
}
