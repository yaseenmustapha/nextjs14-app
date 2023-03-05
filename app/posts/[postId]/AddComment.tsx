"use client";
import {
  Button,
  Loading,
  Popover,
  Row,
  Spacer,
  Text,
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
        size="xl"
        bordered
        disabled={!session}
        width="100%"
        placeholder={session ? "Comment here..." : "Please sign in to comment."}
        value={content}
        maxLength={300}
        onChange={(e) => setContent(e.target.value)}
      />
      <Spacer y={0.5} />
      <Row wrap="wrap" align="center" justify="space-between">
        <Popover isOpen={error} onOpenChange={setError} placement="right">
          <Popover.Trigger>
            <Button type="submit" disabled={!session}>
              {loading ? <Loading color="currentColor" size="sm" /> : "Comment"}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>{errorMessage}</Text>
          </Popover.Content>
        </Popover>

        <Text>{content.length}/300</Text>
      </Row>

      <Spacer y={1} />
    </form>
  );
}
