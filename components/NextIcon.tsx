"use client";

import { type Sizes } from "@/types/styles";

import clsx from "clsx";

import { Icon } from "@iconify-icon/react";

interface NextIconProps {
  name: string;
  size?: Sizes | "2xs" | "3xs";
  className?: string;
}

const sizes: Record<NonNullable<NextIconProps["size"]>, string> = {
  "3xs": "text-xs",
  "2xs": "text-sm",
  xs: "text-lg",
  sm: "text-xl",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-2xl",
};

export function NextIcon ({ className, size, ...props }: NextIconProps) {
  return <Icon icon={ props.name } className={ clsx("block", sizes[size ?? "md"], className) } />;
};