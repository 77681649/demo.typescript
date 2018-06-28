type Unit = "CNY" | "HKD" | "USD";

function toCurrency(amount: number, unit: Unit) {
  switch (unit) {
    case "CNY":
      return unit + " " + amount;
    case "HKD":
      return unit + " " + amount / 0.8;
    case "USD":
      return unit + " " + amount * 0.6;
  }
}

toCurrency(100, "CNY");
toCurrency(100, "HKD");
toCurrency(100, "TPE");
