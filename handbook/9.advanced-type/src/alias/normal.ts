/**
 * 普通的别名
 */
namespace aliasNormal {
  type Callback = (err: Error, result: any) => void;
  type NameOrCallback = string | Callback;

  let name: NameOrCallback = "aha";
  let callback: NameOrCallback = function(err, result) {};
}
