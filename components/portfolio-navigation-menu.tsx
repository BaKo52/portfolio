"use client"

import {
    NavigationMenu, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import React from "react";
import {ModeToggle} from "@/components/mode-toggle";
import {cn} from "@/lib/utils";

export default function PortfolioNavigation({ className }: { className?: string }) {
    return (
        <NavigationMenu
            aria-label="Main menu"
            className={cn("sticky z-[1] grow h-16 w-full px-4 space-x-4 bg-gray-300 shadow-sm dark:bg-slate-950 dark:shadow-none content-center", className)}
        >
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href={"/"}>
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href={"/projects"}>
                        Projects
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={""}>
                    <ModeToggle/>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}