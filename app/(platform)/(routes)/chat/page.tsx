"use client";
import React, { useState } from "react";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "./_components/loader";

const headers = new Headers({
  Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN,
  "Content-Type": "application/json",
});

async function chatAnswer() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/qa/chat`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ message: "Ci sono" }),
    }
  );
  return res.json();
}

interface Message {
  role: "user" | "bot";
  content: string;
}

const ConversationPage = () => {
  const [urlResponse, setUrlResponse] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const scrapeForm = useForm({
    resolver: zodResolver(
      z.object({
        url: z.string().url({ message: "Please enter a valid URL." }),
      })
    ),
  });
  const chatForm = useForm({
    resolver: zodResolver(
      z.object({
        message: z.string().min(1, { message: "Message is required." }),
      })
    ),
  });

  const onChatSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await chatAnswer();

      console.log("Response: ", response);

      setMessages([
        ...messages,
        { role: "user", content: data.message },
        { role: "bot", content: response.data },
      ]);
    } catch (error) {
      console.error("Error in chat: ", error);
    }
    setIsLoading(false);
    chatForm.reset();
  };

  return (
    <div>
      <div className="mt-4 px-4 lg:px-8">
        <Form {...chatForm}>
          <form
            onSubmit={chatForm.handleSubmit(onChatSubmit)}
            className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
          >
            <FormField
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input {...field} placeholder="Type your message" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="bg-green col-span-12 w-full text-white lg:col-span-2"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Form>
        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="flex w-full items-center justify-center rounded-lg bg-muted p-8">
              <Loader />
            </div>
          )}
          {
            messages.length === 0 &&
              urlResponse === "" &&
              !isLoading &&
              null /* This will not render anything */
          }
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex w-full items-start gap-x-8 rounded-lg p-8 ${
                  message.role === "user"
                    ? "border border-black/10 bg-white"
                    : "bg-muted"
                }`}
              >
                {message.role === "user" ? "You" : "NeuAI"}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
