
export function getAppRoot() {
  return document.getElementById("app");
}

export function clearApp() {
  const app = getAppRoot();

  if (app) {
    app.innerHTML = "";
  }
}

export function setAppContent(content) {
  const app = getAppRoot();

  if (!app) {
    throw new Error("Application root (#app) was not found.");
  }

  app.innerHTML = content;
}