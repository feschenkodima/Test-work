let input = document.getElementById("number-input");
const submitBtn = document.getElementById("submit");

const numberFormatFunction = (number, separator_before_point, fractions) => {
  number = (number + "").replace(/[^0-9+\-Ee.]/g, "");

  let n = !isFinite(+number) ? 0 : +number;
  let frac = !isFinite(+fractions) ? 0 : Math.abs(fractions);
  let separator =
    typeof separator_before_point === "undefined"
      ? " "
      : separator_before_point;
  //   let point = typeof dec === "undefined" ? "." : dec;
  let result = "";

  const wholeNumber = (n, frac) => {
    let k = Math.pow(10, frac);
    return "" + Math.round(n * k) / k;
  };
  result = (frac ? wholeNumber(n, frac) : "" + Math.round(n)).split(".");
  console.log(result.includes("."));

  if (result[0].length > 3) {
    result[0] = result[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, separator);
    console.log(result[0]);
  }

  if ((result[1] || "").length < frac) {
    console.log(frac);
    result[1] = result[1] || "";
    console.log(result[1]);
    result[1] += new Array(frac - result[1].length + 1).join("0");
  }

  return result.join(".");
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let result = numberFormatFunction(input.value, " ");
  let stringResult = String(result);
  if (!stringResult.includes(".")) {
    console.log(stringResult);
    alert("enter sum with cents");
    return;
  } else {
    const newElement = document.createElement("div");
    newElement.innerHTML = `<h4>${result}</h4>`;

    document
      .getElementById("form")
      .insertAdjacentElement("afterend", newElement);
  }
});
