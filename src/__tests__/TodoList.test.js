import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoList from '../TodoList'

describe('<TodoList />', () => {
  describe('render', () => {
    let tree

    beforeEach( () => {
      let component = shallow(<TodoList />)
      tree = toJson(component)
    })

    it('matches a snapshot', () => {
      const component = shallow(<TodoList />
      const tree = toJson(component)
      expect(tree).toMatchSnapshot()
    })

    it('matches a snapshot with props', () => {
      const component = shallow(<TodoList color='pink' />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
      })
    })
})
