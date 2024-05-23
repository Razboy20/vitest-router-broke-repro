import { Route } from '@solidjs/router';
import { render } from "@solidjs/testing-library";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from 'vitest';
import Counter from "./Counter";

describe("<Counter />", () => {
  it("increments value", async () => {
    const { findByRole } = render(() => <Route component={Counter} path="/" />, {
      location: "/"
    });
    const button = await findByRole("button") as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Clicks: 0/);
    await userEvent.click(button);
    expect(button).toHaveTextContent(/Clicks: 1/);
  });
});
