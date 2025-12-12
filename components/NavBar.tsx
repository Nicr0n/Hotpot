import DarkModeToggle from "../islands/theme/DarkModeToggle.tsx";

const NavBar = () => {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/">Hotpot Probes</a>
      </div>

      <div class="flex-none">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
