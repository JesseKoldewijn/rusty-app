import * as React from "react"

import { Button } from "@/components/ui/generics/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/generics/card"
import { CrossIcon, GithubIcon } from "lucide-react"

export const WelcomeCard = () => {
  return (
    <Card className="flex w-full flex-col">
      <CardHeader className="w-full text-center">
        <CardTitle>Welcome to the Rusty App!</CardTitle>
        <CardDescription>Feel free to have a look around</CardDescription>
      </CardHeader>
      <CardContent className="w-full"></CardContent>
      <CardFooter className="flex w-full justify-between">
        <Button variant="ghost" className="flex gap-2">
          <CrossIcon />
          <span>Close welcome message</span>
        </Button>
        <Button variant="ghost" className="flex gap-2">
          <GithubIcon />
          <span>Check the source-code</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
