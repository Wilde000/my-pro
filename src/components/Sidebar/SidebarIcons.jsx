import {
  BookOpenIcon,
  
  ArrowUpRightIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
  CubeTransparentIcon,
  WrenchIcon,
  TruckIcon,
  ArrowPathIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const SidebarIcons = () => {
  const icons = [
    BookOpenIcon,
    
    ArrowUpRightIcon,
    ClipboardDocumentCheckIcon,
    CubeIcon,
    CubeTransparentIcon,
    WrenchIcon,
    TruckIcon,
    ArrowPathIcon,
    Cog6ToothIcon,
  ];
  return (
    <div className="mt-4 flex flex-col items-center">
      <ul className=" flex flex-col gap-8 ">
        {icons.map((Icon, index) => (
          <li
            key={index}
            className="block cursor-pointer text-white hover:text-gray-800 mb-2 last:mt-20"
          >
            <Icon className="w-8 h-8" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarIcons;
