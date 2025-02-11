import React from 'react';

import { Button } from '../src/atoms/button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const bottone = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
bottone.args = {
  label: 'Button',
  type: 'Button',
};

export const Submit = Template.bind({});
Submit.args = {
  size: 'large',
  label: 'Submit',
  type: 'submit',
};

export const Radio = Template.bind({});
Radio.args = {
  size: 'small',
  label: 'Radio',
  type: 'radio',
};
