import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../contacForm";

describe("ContactForm", () => {
  it("renders contact form", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
  });

  it("validates and submits the form", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Nombre/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Correo/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), {
      target: { value: "Hello" },
    });

    fireEvent.click(screen.getByText(/Enviar/i));

    expect(
      await screen.findByText(/Correo enviado exitosamente/i)
    ).toBeInTheDocument();
  });
});
