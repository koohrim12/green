function work(string) {
  try {
  } catch (error) {}
  if (typeof string === "string") {
    console.log(string);
  } else {
    console.error("내가 원하는게 아니야");
  }
}
work("안녕");
work(1);
work(true);
work({ name: "구하림" });
