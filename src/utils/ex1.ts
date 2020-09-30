export class Utils {
  public static findMax(...args: number[]): number {
    return Math.max(...args);
  }

  public static findMin(...args: number[]): number {
    return Math.min(...args);
  }

  public static reformatData(x: any): Record<string, any> {

    var result = {
      content: [],
      developer: [],
      designer: [],
      ux: [],
    };

    var data = x.reduce((a, b) => ({
      ...a,
      [b.role]: (a[b.role] || []).concat(b)
    }), {})

    //console.log(data);

    for (let index = 0; index < data.content.length; index++) {
      var obj = {
        nickname: data.content[index].name
      }
      result.content.push(obj)
    }

    for (let index = 0; index < data.developer.length; index++) {
      var obj = {
        nickname: data.developer[index].name
      }
      result.developer.push(obj)
    }

    for (let index = 0; index < data.designer.length; index++) {
      var obj = {
        nickname: data.designer[index].name
      }
      result.designer.push(obj)
    }

    for (let index = 0; index < data.ux.length; index++) {
      var obj = {
        nickname: data.ux[index].name
      }
      result.ux.push(obj)
    }

    return result
  }
}

export default Utils

