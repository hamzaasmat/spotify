import { Nav } from "./models/nav.model";

export const routesList:Nav[] = [
    {
        name: 'Home',
        link: 'home',
        isActive: false,
        isDisabled: false,
        icon: 'las la-headphones'
    },
    {
        name: 'Search',
        link: 'dashboard',
        isActive: false,
        isDisabled: false,
        icon: 'las la-search'
    },
    {
        name: 'Library',
        link: 'library',
        isActive: false,
        isDisabled: true,
        icon: 'las la-compact-disc'
    },
    {
        name: 'Play Lists',
        link: 'playlist',
        isActive: false,
        isDisabled: false,
        icon: 'las la-podcast'
    }

]
