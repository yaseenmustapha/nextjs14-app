"use client";
import { Button, Spacer, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPost(): JSX.Element {
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });
    console.log(res);
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        size="xl"
        width="100%"
        label="Write your thoughts"
        placeholder="Enter your amazing ideas."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Spacer y={0.5} />
      <Button type="submit">Post</Button>
      <Spacer y={2} />
    </form>
  );
}
