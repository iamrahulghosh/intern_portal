import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    "email": ""
  })

  const navigate = useNavigate()

  const login = async () => {
    try {
      const response = await axios.post("https://cxi-server.vercel.app/api/v1/intern/login", credentials, {
        withCredentials: true, "Content-Type": "application/json"
      })

      if (response.status === 200) {
        navigate("/dashboard")
      }

      console.log(response?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  

  console.log(credentials)

  return (
    <div>
      <Card className="w-96 max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email & mobile number below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => setCredentials((prev) => {return {...prev, "email": e.target?.value}})}
                  required
                />
              </div>
              {/* <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="text">Mobile No</Label>
                  
                </div>
                <Input id="text" type="text" placeholder="9876543253" onChange={(e) => setCredentials((prev) => {return {...prev, "mobile": e.target?.value}})}required />
              </div> */}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={login}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
