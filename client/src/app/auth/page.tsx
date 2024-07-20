"use client";
import React from "react";
import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AuthPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Tabs defaultValue="signIn" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="signIn">Sign In</TabsTrigger>
          <TabsTrigger value="signUp">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          <SignInForm />
        </TabsContent>
        <TabsContent value="signUp">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;
