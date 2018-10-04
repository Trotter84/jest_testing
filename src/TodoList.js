import React from 'react'

class TodoList extends React.Component {
  state = { items: [], name: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { items, name } = this.state
    this.setState({ items: [name, ...items], name: '' })
  }

  render() {
    const { name, items } = this.state
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={name}
            required
            onChange={this.handleChange}
            placeholder="Add Item"
          />
          <ul>
            { items.map( (item, i) => <li key={i}>{item}</li> ) }
          </ul>
        </form>
      </>
    )
  }
}

export default TodoList
