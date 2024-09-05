import { Square2StackIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
    Dropdown,
    Ripple,
    initTWE,
} from "tw-elements";


const Notations = () => {
    initTWE({ Dropdown, Ripple });
    return (
        <header className="flex flex-row ml-14  w-[400px]  md:flex-col md:float-left">
            <div className="text-white flex justify-center pb-2">
                <h2 className="order-1 text-lg font-semibold">Записи</h2>
            </div>
            <div className="flex flex-row justify-between white">
                <button
                    className="flex items-center text-sm rounded bg-primary px-6 pb-2 pt-2 font-normal leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    type="button"
                    id="dropdownMenuButton1"
                    data-twe-dropdown-toggle-ref
                    aria-expanded="false"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Фильтры
                    <span className="ms-2 w-2">
                        <ChevronDownIcon className="w-4 h-4 stroke-white stroke-2" />
                    </span>
                </button>
                <ul
                    className="absolute z-[1000] m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                    aria-labelledby="dropdownMenuButton1"
                    data-twe-dropdown-menu-ref>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"

                            data-twe-dropdown-item-ref
                        >Показать всё</a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"

                            data-twe-dropdown-item-ref
                        >Очистить всё</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex relative flex-wrap columns-2 float-left text-left text-sm gap-4 justify-between text-white cursor-pointer">
                    <li className="order-2 2xl:float-left flex gap-1 items-center">Копировать
                        <Square2StackIcon className="w-4 h-4 text-white stroke-white stroke-1" />
                        
                    </li>
                </ul>
            </div>
            <div className="flex justify-between white">
                <button
                    className="flex items-center text-sm rounded bg-primary px-6 pb-2 pt-2 font-normal leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    type="button"
                    id="dropdownMenuButton1"
                    data-twe-dropdown-toggle-ref
                    aria-expanded="false"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Выделенные
                    <span className="ms-2 w-2">
                        <ChevronDownIcon className="w-4 h-4 stroke-white stroke-2" />
                    </span>
                </button>
                <ul
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                    aria-labelledby="dropdownMenuButton1"
                    data-twe-dropdown-menu-ref>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"

                            data-twe-dropdown-item-ref
                        >Снять выделение</a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"

                            data-twe-dropdown-item-ref
                        >Фильтровать выделенное</a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"

                            data-twe-dropdown-item-ref
                        >Отменить фильтрацию</a>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Notations;