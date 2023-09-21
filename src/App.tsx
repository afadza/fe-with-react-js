import React from "react";

interface Data {
  name: string
  username: string
  email: string
}

interface State {
  data: Data[] | null
}

export default class App extends React.Component<{value: string}, State> {
  constructor(props: {value: ''}) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const dataArray = Array.isArray(data) ? data : [data]
      this.setState({data: dataArray})
    })
    .catch((error) => {
      alert(`Error fetching ${error}`)
    })
  }

  render() {
    const {data} = this.state
    return (
      <React.Fragment>
        <div>
          {data && data.map((data) => (
            <div>
              <p>{data?.name}</p>
              <p>{data?.username}</p>
              <p>{data?.email}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
