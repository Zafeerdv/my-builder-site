import { ReactNode, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface ModernCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
  children?: ReactNode;
  className?: string;
  hover3D?: boolean;
  glowOnHover?: boolean;
  animated?: boolean;
}

export function ModernCard({
  title,
  description,
  icon,
  badge,
  children,
  className,
  hover3D = true,
  glowOnHover = true,
  animated = true,
}: ModernCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-md hover:shadow-2xl transition-all duration-500",
        hover3D && "hover:-translate-y-2 hover:rotate-1",
        glowOnHover && "hover:shadow-primary/10",
        animated && "transform-gpu",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100",
        )}
      />

      {/* Glow Effect */}
      {glowOnHover && (
        <div
          className={cn(
            "absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 transition-opacity duration-500",
            isHovered && "opacity-20",
          )}
        />
      )}

      <div className="relative z-10">
        <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {icon && (
                <div
                  className={cn(
                    "transform transition-all duration-300 flex-shrink-0",
                    isHovered && "scale-110 rotate-12",
                  )}
                >
                  {icon}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {title}
                </CardTitle>
                {badge && (
                  <Badge
                    variant="secondary"
                    className={cn(
                      "mt-1 sm:mt-2 transform transition-all duration-300 text-xs",
                      isHovered && "scale-105",
                    )}
                  >
                    {badge}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3">
            {description}
          </p>
        </CardHeader>

        {children && (
          <CardContent className="pt-0 p-4 sm:p-6">
            <div
              className={cn(
                "transform transition-all duration-500",
                isHovered && "translate-x-1",
              )}
            >
              {children}
            </div>
          </CardContent>
        )}
      </div>

      {/* Corner Decorations */}
      <div
        className={cn(
          "absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent transform transition-all duration-500",
          isHovered && "scale-150 rotate-12",
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/20 to-transparent transform transition-all duration-500",
          isHovered && "scale-150 -rotate-12",
        )}
      />
    </Card>
  );
}
