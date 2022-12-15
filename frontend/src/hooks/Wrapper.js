import React from 'react';
import axios from 'axios';
class Wrapper extends React.Component {
    state = {
        data: null,
        error: null,
        isLoading: true,
    };
    getData() {
        axios
            .get(this.props.link)
            .then((response) => {
                this.setState({
                    data: response.data,
                    isLoading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error,
                    isLoading: false,
                });
            });
    }
    componentDidMount() {
        this.setState({ isLoading: true }, this.getData());
    }
    render() {
        return this.props.render(this.state);
    }
}
export default Wrapper;
