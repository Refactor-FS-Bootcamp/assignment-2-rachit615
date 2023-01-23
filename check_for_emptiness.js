function isEmpty(obj) {
  if (Object.keys(obj).length == 0) {
    return true;
  } else return false;
}
let schedule = {
  "8:30": "getup",
};
if (isEmpty(schedule)) {
  alert("true");
} else {
  alert("false");
}
