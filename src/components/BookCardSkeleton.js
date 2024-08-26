import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const BookCardSkeleton = () => {
  return (
    <Card className="bg-accent2 bg-opacity-10 h-full">
      <Skeleton className="rounded-lg">
        <div className="h-64 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3 p-4">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-8 w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

export default BookCardSkeleton;
