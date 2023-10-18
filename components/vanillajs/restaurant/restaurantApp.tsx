"use client";
import React from "react";
import { Tabs, TabsContent, TabsTrigger } from "./customComponents/tabs";
import RestaurantHomePage from "./rHomepage";
import RestaurantMenuPage from "./rMenupage";
import RestaurantContactPage from "./rContactpage";

const RestaurantApp = () => {
  return (
    <div className=" p-2 bg-neutral-200 dark:bg-slate-900 border border-gray-400 dark:border-gray-700 rounded mb-2">
      <div className="bg-zinc-600 dark:bg-slate-950 p-2 rounded">
        <Tabs darkMode={true}>
          <TabsTrigger value="home">
            <p>Home</p>
          </TabsTrigger>
          <TabsTrigger value="menu">
            <p>Menu</p>
          </TabsTrigger>
          <TabsTrigger value="contact">
            <p>Contact</p>
          </TabsTrigger>

          <TabsContent value="home">
            <RestaurantHomePage />
          </TabsContent>
          <TabsContent value="menu">
            <RestaurantMenuPage />
          </TabsContent>
          <TabsContent value="contact">
            <RestaurantContactPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RestaurantApp;
