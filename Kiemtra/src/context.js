import React, { Component } from 'react'
const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        name: "hung",
        vi:"an com chua"
    }
    render() {
        return (
            <div>
                <RoomContext.Provider value={this.state}>
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }m
}
const Hung= RoomContext.Consumer
export { RoomContext, RoomProvider,Hung }