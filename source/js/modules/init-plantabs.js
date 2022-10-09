export function initPlanTabs() {
  const plansSection = document.querySelector(".plans");

  if (plansSection) {
    const navigation = plansSection.querySelector(".plans__nav"),
      tabs = navigation !== null && navigation.querySelectorAll("a"),
      panels = plansSection.querySelectorAll(".plans__list");

    let currentTabIndex = 0;

    if (tabs !== false) {
      tabs.forEach((tab, index) => {
        tab.addEventListener("click", (e) => {
          e.preventDefault();
          if (currentTabIndex === index) {
            return panels[currentTabIndex].focus();
          }

          return switchTab(index);
        });

        tab.addEventListener("keydown", ({ key }) => {
          switch (key) {
            case "ArrowRight":
              return (
                currentTabIndex !== tabs.length - 1 && switchTab(currentTabIndex + 1)
              );

            case "ArrowLeft":
              return currentTabIndex !== 0 && switchTab(currentTabIndex - 1);

            case "ArrowDown": return panels[currentTabIndex].focus();
            default: break;
          }
        });
      });

      function switchTab(newIndex) {
        const newTab = tabs[newIndex],
          oldTab = tabs[currentTabIndex];

        newTab.focus();
        newTab.removeAttribute("tabindex");
        newTab.setAttribute("aria-selected", "true");

        oldTab.removeAttribute("aria-selected");
        oldTab.setAttribute("tabindex", "-1");
        panels[currentTabIndex].hidden = true;
        panels[newIndex].hidden = false;
        currentTabIndex = newIndex;
      }
    }
  }
}
