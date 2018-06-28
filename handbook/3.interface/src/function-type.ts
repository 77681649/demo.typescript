/**
 * 函数类型 - 定义函数契约
 */
interface DoneCallback {
  (err: Error, result: string): void;
}

let onError: DoneCallback = function(err, result) {
  err = 123;
  result = "aha";
};
