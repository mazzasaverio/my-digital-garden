import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon?: LucideIcon; // Make icon optional
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="mb-8 text-center">
      {Icon && ( // Check if Icon is provided
        <div className={cn("inline-flex rounded-md p-2", bgColor)}>
          <Icon className={cn("h-10 w-10", iconColor)} />
        </div>
      )}
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
