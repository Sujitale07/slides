"use client";
import Sheet from "@/components/global/sheet/index";
import { PAGES_BREADCRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/user-nav";
import { Menu } from "lucide-react";
import { LogoSmall } from "@/svgs/logo-small";
import { usePathname } from "next/navigation";
import React from "react";
import Sidebar from "../sidebar";
import Items from "../sidebar/items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons/help-duotome-white";
import SubscriptionPlan from "../subscription-plan";
import Search from "@/components/global/navbar/search/search"
import UpgradeCard from "../sidebar/upgrade";
import CreateAutomation from "../create-automation";
import Notifications from "./notifications";
import MainBreadCrumb from "../bread-crumbs/main-bread-crumb";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGES_BREADCRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet side="left" trigger={<Menu></Menu>} className="lg:hidden" >
              <div className="flex flex-col gap-y-5 w-full mt-5  h-full    pb-6   bg-opacity-90  bg-clip-padding  backdrop-filter  backdrop--blur__safari  backdrop-blur-3xl">
               
                <div className="flex flex-col py-3">
                  <Items page={page} slug={slug}></Items>
                </div>
                <div className="px-16">
                  <Separator
                    orientation="horizontal"
                    className="bg-[#333336]"
                  ></Separator>
                </div>
                <div className="px-3 flex flex-col gap-y-5">
                  <div className="flex gap-x-2 items-center">
                    <ClerkAuthState></ClerkAuthState>
                    <p className="text-[#989CA0] capitalize">Profile</p>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <HelpDuoToneWhite></HelpDuoToneWhite>
                    <p className="text-[#989CA0] capitalize">help</p>
                  </div>
                </div>
                <SubscriptionPlan type="FREE">
                  <div className=" flex-1 flex flex-col justify-end">
                    <UpgradeCard></UpgradeCard>
                  </div>
                </SubscriptionPlan>
              </div>
            </Sheet>
          </span>
          <Search></Search>
          <CreateAutomation></CreateAutomation>
          <Notifications></Notifications>
        </div>
        <MainBreadCrumb page={page == slug ? "Home" : page} slug={slug} ></MainBreadCrumb>
      </div>
    )
  );
};

export default Navbar;
