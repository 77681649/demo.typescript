namespace useTypeof {
  function isNumber(x: any) {
    return typeof x === "number";
  }

  function isString(x: any) {
    return typeof x === "string";
  }

  function padLeft(value: string, padding: string | number) {
    // typeof 达到类型谓词的效果
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (isString(typeof padding === "string")) {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
}
