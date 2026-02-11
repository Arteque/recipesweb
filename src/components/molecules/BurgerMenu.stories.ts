import type { Meta, StoryObj } from "@storybook/react-vite";
import { BurgerMenu } from "./BurgerMenu";
import { fn } from "storybook/test";

const meta = {
  title: "Molecules/BurgerMenu",
  component: BurgerMenu,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Sotry = StoryObs<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    label: "Nav Open",
  },
};

export const Close: Story = {
  args: {
    open: false,
  },
};
