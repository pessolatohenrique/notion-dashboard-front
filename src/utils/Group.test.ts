import { Group } from "./Group";

describe("Group array", () => {
  it("should group array by attribute", () => {
    const list = [
      { name: "Sherlock Homes", category: "Suspense" },
      { name: "Morte no nilo", category: "Suspense" },
      { name: "Harry Potter e a pedra filosofal", category: "Fantasia" },
      { name: "Harry Potter e a câmera secreta", category: "Fantasia" },
      { name: "Harry Potter e o prisioneiro de Azkaban", category: "Fantasia" },
    ];

    const listGrouped = Group.groupBy(list, "category");
    expect(listGrouped).toHaveProperty("Suspense");
    expect(listGrouped).toHaveProperty("Fantasia");
  });
});
