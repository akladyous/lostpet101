/* eslint-disable react/display-name */
import { useLocation, useParams } from 'react-router-dom';
import { useAxios } from './useAxios.jsx';

export function withLocationProps(WrappedComponent) {
  return (props) => {
    const { resourceName, paramsName, ...rest } = props || {};

    const { state } = useLocation();
    const { petName } = useParams();

    return (
      <WrappedComponent
        {...{ [resourceName]: state }}
        {...{ urlParams: petName }}
        {...rest}
      />
    );
  };
}
