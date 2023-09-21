import React from "react";

interface State {
    agree: string;
}

export default class Agree extends React.Component<{value ?: null}, State> {
    state: State = {
        agree: 'Saya setuju',
    }

    changeAgree = () => {
        this.setState((prevState) => ({
            agree: prevState.agree === 'Saya setuju' ? 'Saya tidak setuju' : 'Saya setuju',
        }))
    }

    render() {
        return (
            <React.Fragment>
                <p>2024 adalah tahunnya pak Prabowo? {this.state.agree}</p>
                <button onClick={this.changeAgree}>Ubah pilihan</button>
            </React.Fragment>
        )
    }
}
