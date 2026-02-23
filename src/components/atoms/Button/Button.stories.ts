import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Button,
  title: "Anchors/Button",
  tags: ["Button"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "full",
    children: "Click me",
  },
  name: "Primary Button",
};
