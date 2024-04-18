import { MessageSquare } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="relative h-10 w-10 animate-spin">
        <MessageSquare className="h-full w-full" />
      </div>
      <p className="text-sm text-muted-foreground">I am thinking...</p>
    </div>
  );
};
