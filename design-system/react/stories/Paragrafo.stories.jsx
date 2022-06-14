import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Paragrafo } from '../src/molecules/paragrafo/Paragrafo';

export default {
    title: 'Example/molecules/Paragrafo',
    component: Paragrafo,

    argTypes:{

    },
};
const Template = (args) => <Paragrafo {...args}></Paragrafo>

export const PlainParagrafo = Template.bind({});

PlainParagrafo.args = {
    children: <Text label={'label'}></Text>
};