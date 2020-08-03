import React from 'react';
import { menuItems } from '../data/routeConfig';
import { Link } from 'react-router-dom';
import { Param } from '../model/IRoute';

export const Header = (): JSX.Element => {
    const createTo = (path: string, paramObj?: Array<Param>): string => {
        let newPath = path;
        for (const p of paramObj!) {
            newPath = newPath.replace(':'+p.id, p.value)
        }
        return newPath;
    }
    return (
        <>
            {menuItems.map(menuItem => (
                <Link style={{ textDecoration: 'none' }} key={menuItem.title} to={menuItem.containParam ? createTo(menuItem.path, menuItem.params) : menuItem.path}>
                    {menuItem.title + " "}
                </Link>
            ))}
        </>
    )
}
