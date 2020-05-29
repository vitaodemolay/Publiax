export function strToObject(str: string) {
    let result: object;
    try {
      result = JSON.parse(str);
    } catch {
      result = { data: str };
    }
    return result;
  }
  