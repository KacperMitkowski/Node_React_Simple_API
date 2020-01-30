import React from 'react';
import Nav from "./components/nav.js";
import NewEventForm from "./components/form.js";
import EventsTable from "./components/allEvents";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPage: true,
            eventFormPage: null,
            allEventsPage: null,
            headerText: 'Main page',
            error: '',
        }
    }

    showEventForm() {
        this.setState({
            mainPage: null,
            eventFormPage: true,
            allEventsPage: null,
            headerText: 'Submit event form'
        })
    }

    showMainPage() {
        this.setState({
            mainPage: true,
            eventFormPage: null,
            allEventsPage: null,
            headerText: 'Main page'
        })
    }

    showAllEvents() {
        this.setState({
            mainPage: null,
            eventFormPage: null,
            allEventsPage: true,
            headerText: 'All events'
        })
    }


    render() {
        if (this.state.mainPage) {
            return (
                <Nav
                    headerText={this.state.headerText}
                    leftButtonAction={() => this.showEventForm()}
                    rightButtonAction={() => this.showAllEvents()}
                    leftButtonText='Create event'
                    rightButtonText='All events'
                />
            )
        } else if (this.state.eventFormPage) {
            return (
                <React.Fragment>
                    <Nav
                        headerText={this.state.headerText}
                        leftButtonAction={() => this.showMainPage()}
                        rightButtonAction={() => this.showAllEvents()}
                        leftButtonText='Main page'
                        rightButtonText='All events'
                    />
                    <main>
                        <NewEventForm/>
                    </main>
                </React.Fragment>
            )
        } else if (this.state.allEventsPage) {
            return (
                <React.Fragment>
                    <Nav
                        headerText={this.state.headerText}
                        leftButtonAction={() => this.showMainPage()}
                        rightButtonAction={() => this.showEventForm()}
                        leftButtonText='Main page'
                        rightButtonText='Create event'
                    />
                    <main>
                        <EventsTable/>
                    </main>
                </React.Fragment>
            )
        }
    }
}

export default App;
