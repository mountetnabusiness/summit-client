import * as react_jsx_runtime from 'react/jsx-runtime';

interface AppNavProps {
    activeKey: string;
}
declare function AppNav({ activeKey }: AppNavProps): react_jsx_runtime.JSX.Element;

declare const portals: {
    key: string;
    label: string;
    url: string;
}[];

export { AppNav, portals };
