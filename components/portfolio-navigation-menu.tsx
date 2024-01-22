"use client"

import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import React from "react";
import {ModeToggle} from "@/components/mode-toggle";

export default function PortfolioNavigation() {
    return (
        <NavigationMenu
            aria-label="Main menu"
            className="relative z-[1] flex items-center justify-center h-16 px-4 space-x-4 bg-white shadow-sm dark:bg-slate-950 dark:shadow-none"
        >
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href={"/"}>
                        Home
                    </NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href={"/projects"}>
                        Projects
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <ModeToggle></ModeToggle>
            </NavigationMenuList>
        </NavigationMenu>
    )
}