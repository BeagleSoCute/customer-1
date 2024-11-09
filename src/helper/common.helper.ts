export const upperTheFirstChar = (str:string) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
}

export const scrollToSection = (sectionId:string) => {
   const sectionElement = document.getElementById(sectionId);
   if (sectionElement) {
     sectionElement.scrollIntoView({ behavior: "smooth" });
   }
}