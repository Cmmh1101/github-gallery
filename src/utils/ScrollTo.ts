export const scrollTo = (section: string) => {
    const anchor = document.querySelector(`${section}`);
    anchor?.scrollIntoView({ behavior: "smooth", block: "start" });
  };