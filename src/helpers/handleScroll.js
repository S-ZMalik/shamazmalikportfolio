const handleScroll = (id, func) => {
  if (typeof func === "function") {
    func();
  }
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", `#${id}`);
};

export default handleScroll;

//  const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (!element) return;
//     element.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });

//     window.history.replaceState(null, "", `#${id}`);
//   };
