export class Order {
  public static orderByText(list: Array<any>, attribute: string) {
    return list.sort((a, b) => a[attribute].localeCompare(b[attribute]));
  }

  public static orderByListFloat(
    list: Array<any>,
    attribute: string,
    order: string = "ASC"
  ) {
    const orderedList = list;

    if (order.toUpperCase() === "ASC") {
      orderedList.sort(function (a, b) {
        return parseFloat(a[attribute]) - parseFloat(b[attribute]);
      });
    }

    if (order.toUpperCase() === "DESC") {
      orderedList.sort(function (a, b) {
        return parseFloat(b[attribute]) - parseFloat(a[attribute]);
      });
    }

    return orderedList;
  }
}
