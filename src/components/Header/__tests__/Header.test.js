import { render, screen } from "@testing-library/react";
import Header from "../Header";

const scrollToSectionMock = jest.fn();
const refsMock = {
  aboutRef: { current: null },
  interestsRef: { current: null },
  contactFormRef: { current: null },
};

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header scrollToSection={scrollToSectionMock} refs={refsMock} />);
    const heading = screen.getByRole("heading", { name: /Augusto Iphar/i });
    expect(heading).toBeInTheDocument();
  });
});
