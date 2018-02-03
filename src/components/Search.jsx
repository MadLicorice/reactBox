class Search extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: ''
    }
  }
  
  render() {
    return (
      <div>
        <input className="form-control" type="text"/>
        <button className="btn"></button>
      </div>
    )
  }
}

window.Search = Search;