import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Tab3 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User</CardTitle>
        <CardDescription>You can change your user here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="current">Current User</Label>
          <Input id="current" type="text" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New User Name</Label>
          <Input id="new" type="text" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save New User Name</Button>
      </CardFooter>
    </Card>
  );
};
