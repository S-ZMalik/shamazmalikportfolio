"use client";
import { useWholeContext } from "@/context/WholeContext";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeBtn() {
  const { isDark, toggleTheme } = useWholeContext();

  return <button onClick={toggleTheme}>{isDark ? <Sun /> : <Moon />}</button>;
}
