import { BookOpen } from "lucide-react";

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export function Loading({
  message = "Loading...",
  fullScreen = false,
}: LoadingProps) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-lg font-medium text-foreground">{message}</p>
          <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="relative w-12 h-12 mx-auto mb-4">
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
