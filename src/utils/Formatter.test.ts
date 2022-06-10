import { Formatter } from "./Formatter";

describe("CPF formatter", () => {
  it("should mask cpf", () => {
    const cpf = "12345678910";
    const cpfFormatted = Formatter.formatCpf(cpf);
    expect(cpfFormatted).toBe("123.456.789-10");
  });

  it("should unmask cpf", () => {
    const cpfFormatted = "123.456.789-10";
    const cpf = Formatter.formatCpfToString(cpfFormatted);
    expect(cpf).toBe("12345678910");
  });
});
