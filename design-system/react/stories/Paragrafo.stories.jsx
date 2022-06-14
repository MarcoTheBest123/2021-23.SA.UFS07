import React from 'react';

import { Paragrafo } from '../src/molecules/paragrafo/Paragrafo';

export default {
    title: 'Example/atoms/Paragrafo',
    component: Paragrafo,

    argTypes:{

    },
};
const Template = (args) => <Paragrafo {...args}/>;

export const PlainParagrafo = Template.bind({});

PlainParagrafo.args = {
    label: 'ciao mondo',
};