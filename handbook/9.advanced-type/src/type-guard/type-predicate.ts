/**
 * 类型保护 - 类型谓词
 */
interface Fish {
  swim();
}

interface Bird {
  fly();
}

// 返回类型谓词,告知TS编译器其具体的类型
function isFish(pet: Fish | Bird): pet is Fish {
  // 联合类型: 强制转换为指定类型
  return typeof (<Fish>pet).swim === "function";
}

function action(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
