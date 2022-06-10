export class Group {
  public static groupBy(objectList: Array<any>, property: string) {
    const result: Array<any> = objectList.reduce(function (
      list: Array<any>,
      key: any
    ) {
      list[key[property]] = list[key[property]] || [];
      list[key[property]].push(key);
      return list;
    },
    Object.create(null));

    return result;
  }
}
