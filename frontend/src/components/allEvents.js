import React from 'react'

class EventsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: '',
        }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_EVENTS_API_URL}/events`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => this.setState({apiResponse: res}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <table className='App-main-events'>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>FIRST NAME</td>
                    <td>LAST NAME</td>
                    <td>EMAIL</td>
                    <td>DATE</td>
                </tr>
                </thead>
                <tbody>
                {this.state.apiResponse ? this.state.apiResponse.map(event => {
                    return (
                        <React.Fragment key={event.id}>
                            <tr>
                                <td>{event.id}</td>
                                <td>{event.first_name}</td>
                                <td>{event.last_name}</td>
                                <td>{event.email}</td>
                                <td>{event.date}</td>
                            </tr>
                        </React.Fragment>
                    )
                }) : null}
                </tbody>
            </table>
        )
    }
}

export default EventsTable;