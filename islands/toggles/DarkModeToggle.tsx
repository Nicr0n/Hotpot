import { useCallback, useEffect, useState } from "preact/hooks";
// @ts-types="preact"
import { TargetedEvent } from "preact";
import { useSignal } from "@preact/signals";

type Theme = "light" | "dark";

const IS_BROWSER = typeof window !== "undefined";

function isTheme(input: string | null): input is Theme {
  return input === "light" || input === "dark";
}

function getInitialTheme(): Theme {
  // fix SSR error
  if (!IS_BROWSER) {
    return "dark";
  }

  const storedTheme = localStorage.getItem("hotpot_theme");

  if (isTheme(storedTheme)) {
    return storedTheme;
  }

  localStorage.setItem("hotpot_theme", "dark");
  return "dark";
}

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<Theme>(
    getInitialTheme,
  );
  const isLoading = useSignal(true);

  useEffect(() => {
    localStorage.setItem("hotpot_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    isLoading.value = false;
  }, [theme]);

  const handleToggle = useCallback(
    (e: TargetedEvent<HTMLInputElement, Event>) => {
      // 检查当前复选框是否被选中
      const isChecked = e.currentTarget.checked;

      // 根据复选框的状态计算新的主题
      const newTheme: Theme = isChecked ? "dark" : "light";

      // 更新状态，这将触发 useEffect
      setTheme(newTheme);
    },
    [], // 依赖项为空，只创建一次
  );

  if (isLoading.value) {
    return <div class="skeleton h-6 w-10"></div>;
  }

  return (
    <label class="toggle text-base-content">
      <input
        type="checkbox"
        value="dark"
        checked={theme === "dark"}
        onChange={handleToggle}
      />
      <svg
        aria-label="sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </g>
      </svg>

      <svg
        aria-label="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </g>
      </svg>
    </label>
  );
};

export default DarkModeToggle;
