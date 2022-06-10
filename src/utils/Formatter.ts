export class Formatter {
  public static formatCpf(valueToFormat: string): string {
    return valueToFormat
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  public static formatCpfToString(valueToFormat: string): string {
    return valueToFormat.replace(/[^0-9]/g, "");
  }
}
