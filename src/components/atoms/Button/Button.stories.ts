import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Button,
  title: "Button",
  tags: ["Button"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Click me",
  },
};
