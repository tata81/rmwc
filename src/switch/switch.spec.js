import React from 'react';
import { mount } from 'enzyme';
import Switch from './switch';

describe('Switch', () => {
  it('renders', () => {
    const switchEl = mount(<Switch />);
    expect(switchEl.hasClass('mdc-switch')).toEqual(true);
  });

  it('can be checked', () => {
    const switchEl = mount(<Switch checked={true} onChange={() => {}} />);
    expect(switchEl.find('input').getDOMNode().checked).toEqual(true);
  });

  it('can be disabled', () => {
    const switchEl = mount(<Switch disabled />);
    expect(switchEl.find('input').getDOMNode().disabled).toEqual(true);
  });

  it('can have a label', () => {
    const switchEl = mount(<Switch label="hello world" />);
    expect(switchEl.text()).toEqual('hello world');
  });
});