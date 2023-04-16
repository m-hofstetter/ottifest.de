
import type { Meta, StoryObj } from '@storybook/react';
import CountdownComponent from "../components/CountdownComponent";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

const meta: Meta<typeof CountdownComponent> = {
    title: 'Countdown',
    component: CountdownComponent,
};

export default meta;
type Story = StoryObj<typeof CountdownComponent>;

export const Primary: Story = {
    args: {
        targetDate: new Date()
    },
    argTypes: {
        targetDate: {
            control: 'date'
        }
    }
};