import * as coreFreeIcons from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import * as React from "react";

type IconProps = Omit<React.ComponentPropsWithoutRef<"svg">, "color"> & {
  color?: string;
  size?: string | number;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
};

export type LucideIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

const iconRegistry = coreFreeIcons as Record<string, unknown>;

const DEFAULT_ICON: IconSvgElement = [
  ["circle", { cx: 12, cy: 12, r: 9 }],
  ["line", { x1: 12, y1: 8, x2: 12, y2: 12 }],
  ["line", { x1: 12, y1: 16, x2: 12.01, y2: 16 }],
];

function isIconSvgElement(value: unknown): value is IconSvgElement {
  return Array.isArray(value);
}

function resolveIcon(candidates: string[]): IconSvgElement {
  for (const candidate of candidates) {
    const icon = iconRegistry[candidate];
    if (isIconSvgElement(icon)) {
      return icon;
    }
  }

  const fallbackCandidates = [
    "InformationCircle",
    "Info",
    "AlertCircle",
    "Circle",
  ];

  for (const fallback of fallbackCandidates) {
    const icon = iconRegistry[fallback];
    if (isIconSvgElement(icon)) {
      return icon;
    }
  }

  return DEFAULT_ICON;
}

function createIcon(...candidates: string[]): LucideIcon {
  const resolvedIcon = resolveIcon(candidates);

  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    (
      { color = "currentColor", size = 24, strokeWidth = 1.5, ...props },
      ref,
    ) => (
      <HugeiconsIcon
        ref={ref}
        icon={resolvedIcon}
        size={size}
        strokeWidth={strokeWidth}
        primaryColor={color}
        secondaryColor={color}
        disableSecondaryOpacity
        {...props}
      />
    ),
  );

  Icon.displayName = candidates[0] ?? "HugeiconsCompatIcon";

  return Icon;
}

export const AlertOctagon = createIcon(
  "AlertOctagon",
  "AlertTriangle",
  "Alert02",
  "Alert02Icon",
  "Alert",
  "AlertCircle",
);
export const AlertTriangle = createIcon(
  "AlertTriangle",
  "Alert",
  "Alert02",
  "Alert02Icon",
);

export const ArrowLeft = createIcon("ArrowLeft", "ArrowLeft01Icon");
export const ArrowRight = createIcon("ArrowRight", "ArrowRight01Icon");

export const Briefcase = createIcon("Briefcase", "Briefcase01Icon");

export const CalendarClock = createIcon(
  "CalendarClock",
  "Calendar01",
  "Calendar01Icon",
  "Calendar03Icon",
);

export const Check = createIcon("Check", "Tick01Icon", "Checkmark");
export const CheckIcon = createIcon("CheckIcon", "Check", "Tick01Icon");
export const CheckCircle2 = createIcon(
  "CheckCircle2",
  "CheckCircle",
  "CheckmarkCircle01Icon",
  "CircleCheck",
);

export const ChevronDown = createIcon("ChevronDown", "ArrowDown01Icon");
export const ChevronDownIcon = createIcon(
  "ChevronDownIcon",
  "ChevronDown",
  "ArrowDown01Icon",
);
export const ChevronLeftIcon = createIcon(
  "ChevronLeftIcon",
  "ChevronLeft",
  "ArrowLeft01Icon",
);
export const ChevronRight = createIcon("ChevronRight", "ArrowRight01Icon");
export const ChevronRightIcon = createIcon(
  "ChevronRightIcon",
  "ChevronRight",
  "ArrowRight01Icon",
);
export const ChevronUp = createIcon("ChevronUp", "ArrowUp01Icon");

export const Circle = createIcon("Circle", "CircleIcon");
export const CircleIcon = createIcon("CircleIcon", "Circle");

export const Compass = createIcon("Compass", "CompassIcon");

export const Ghost = createIcon("Ghost", "GhostIcon", "Monster", "MonsterIcon");

export const Github = createIcon("Github", "GithubIcon", "Github01Icon");
export const Globe2 = createIcon("Globe2", "Globe", "GlobeIcon", "Globe02Icon");

export const Home = createIcon("Home", "HomeIcon", "Home01Icon");

export const Info = createIcon("Info", "InformationCircle", "InformationCircleIcon");

export const LifeBuoy = createIcon("LifeBuoy", "Lifebuoy", "LifebuoyIcon");
export const Link2 = createIcon("Link2", "Link02", "Link02Icon", "Link01Icon");
export const Linkedin = createIcon("Linkedin", "Linkedin01Icon", "Linkedin02Icon");
export const LogOut = createIcon("LogOut", "Logout", "Logout01Icon");

export const Mail = createIcon("Mail", "Mail01Icon");
export const Menu = createIcon("Menu", "Menu01Icon");
export const MessageSquare = createIcon(
  "MessageSquare",
  "MessageSquareText",
  "Message01Icon",
);
export const Moon = createIcon("Moon", "Moon01Icon");
export const MoreHorizontal = createIcon(
  "MoreHorizontal",
  "MoreHorizontalIcon",
);

export const Phone = createIcon("Phone", "PhoneCall", "PhoneCallIcon");

export const RefreshCw = createIcon(
  "RefreshCw",
  "RefreshCwOff",
  "Refresh",
  "RefreshIcon",
);
export const Rocket = createIcon("Rocket", "Rocket01Icon");

export const Search = createIcon("Search", "Search01Icon");
export const Sun = createIcon("Sun", "Sun01Icon");

export const Twitter = createIcon("Twitter", "TwitterIcon", "NewTwitterIcon");

export const User = createIcon("User", "UserIcon");
export const Users = createIcon("Users", "UserGroup", "UserCircleIcon");

export const X = createIcon("X", "Cancel01Icon", "CancelCircleIcon", "CircleX");
export const XCircle = createIcon("XCircle", "CircleX", "CancelCircleIcon");
