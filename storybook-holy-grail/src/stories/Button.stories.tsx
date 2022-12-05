import React from "react";
import { Story } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Yummm 🌭",
  hasBorder: true,
};

export const All = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Button color="black" hasBorder>
        Raisin Black 🍇
      </Button>
      <Button color="white">Coconut White 🥥</Button>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
      <Button color="black" hasBorder>
        Default Raisin
      </Button>
      <Button color="black" hasBorder size={"sm"}>
        Small Raisin
      </Button>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Button color="black" hasBorder isLoading>
        Loading...
      </Button>
      <Button color="white" isLoading>
        Loading...
      </Button>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Button color="black" hasBorder disabled>
        Hey there 👋
      </Button>
      <Button color="white" disabled>
        Popcorn 🍿
      </Button>
    </div>
  );
};
