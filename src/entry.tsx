import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "./components/Page.tsx";

const root = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(
    <StrictMode>
      <Page />
    </StrictMode>
  );
} else {
  console.error("ページの読み込みに失敗しました。");
}
