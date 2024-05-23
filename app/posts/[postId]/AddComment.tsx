"use client";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Filter from "bad-words";

const filter = new Filter();

export default function AddComment({
  postId,
}: {
  postId: string;
}): JSX.Element {
  const { data: session } = useSession();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error creating post.");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (content.length < 1) {
      setErrorMessage("Post cannot be empty.");
      setError(true);
    } else if (filter.isProfane(content)) {
      setErrorMessage("Profanity is not allowed.");
      setError(true);
    } else {
      try {
        const filteredContent = filter.clean(content);
        const res = await fetch("/api/addComment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: filteredContent,
            postId: postId,
          }),
        });
        if (res.ok) {
          setContent("");
          router.refresh();
        }
        setError(false);
      } catch {
        setErrorMessage("Error creating comment.");
        setError(true);
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Spacer y={0.5} />
      <Textarea
        isInvalid={error}
        errorMessage={error && errorMessage}
        className="mt-6"
        size="lg"
        variant="bordered"
        labelPlacement="outside"
        isDisabled={!session}
        width="100%"
        placeholder={session ? "Comment here..." : "Please sign in to comment."}
        value={content}
        maxLength={300}
        onChange={(e) => setContent(e.target.value)}
      />
      <Spacer y={0.5} />
      <div className="row flex-wrap flex items-center">
        <Button
          className="font-medium"
          color="primary"
          type="submit"
          isDisabled={!session}
        >
          {loading ? <Spinner size="sm" /> : "Comment"}
        </Button>

        <p className="ml-auto">{(content && content.length) || "0"}/300</p>
      </div>

      <Spacer y={1} />
    </form>
  );
}
