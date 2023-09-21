import React from "react";

export default class Thankyou extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <p>Terima Kasih</p>
                    <ThankyouChild thankyou="Arya Fadhilah Dzaki"/>
                </div>
            </React.Fragment>
        )
    }
}

class ThankyouChild extends React.Component<{thankyou: string}> {
    render() {
        return (
            <React.Fragment>
                <div>
                    <p>{this.props.thankyou}</p>
                </div>
            </React.Fragment>
        )
    }
}