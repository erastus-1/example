import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          as={NavLink} to="/"
          name='home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/"
          name='product'
          active={activeItem === 'Products'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/"
          name='services'
          active={activeItem === 'Services'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}