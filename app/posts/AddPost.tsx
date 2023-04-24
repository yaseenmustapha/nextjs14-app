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

export default function AddPost(): JSX.Element {
  const { data: session } = useSession();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [enhancing, setEnhancing] = useState(false);
  const [enhanceError, setEnhanceError] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error creating post.");
  const router = useRouter();

  const enhanceWithAI = async () => {
    if (enhancing) return;
    if (content.length < 1) {
      setEnhanceError(true);
      return;
    }
    setEnhancing(true);
    setEnhanceError(false);

    const res = await fetch("/api/enhanceMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: content,
      }),
    });

    if (res.ok) {
      const GPTdata = await res.json();
      setContent(GPTdata.content);
    } else {
      setEnhanceError(true);
    }
    setEnhancing(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
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
        const res = await fetch("/api/addPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: filteredContent,
          }),
        });
        if (res.ok) {
          setContent("");
          router.refresh();
        }
        setError(false);
      } catch {
        setErrorMessage("Error creating post.");
        setError(true);
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Textarea
        size="xl"
        bordered
        disabled={!session}
        width="100%"
        label={session ? "Write your thoughts:" : "Please sign in to post."}
        placeholder={session ? "Enter your amazing ideas..." : ""}
        value={content}
        maxLength={300}
        onChange={(e) => setContent(e.target.value)}
      />
      <Spacer y={0.5} />
      <Row wrap="wrap" align="center">
        <Popover isOpen={error} onOpenChange={setError} placement="right">
          <Popover.Trigger>
            <Button
              type="submit"
              disabled={!session || enhancing}
              auto
              style={{ minWidth: "100px" }}
            >
              {loading ? <Loading color="currentColor" size="sm" /> : "Post"}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>{errorMessage}</Text>
          </Popover.Content>
        </Popover>

        <Popover
          isOpen={enhanceError}
          onOpenChange={enhanceError ? setEnhanceError : undefined}
          placement="right"
        >
          <Popover.Trigger>
            <Button
              color="gradient"
              disabled={!session}
              style={{ marginLeft: 10, minWidth: "150px" }}
              onPress={enhanceWithAI}
              auto
              shadow
            >
              {enhancing ? (
                <Loading type="points-opacity" color="currentColor" size="sm" />
              ) : (
                "Enhance with AI 😎"
              )}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>
              Error enhancing post. Please try again.
            </Text>
          </Popover.Content>
        </Popover>

        <Text style={{ marginLeft: "auto" }}>
          {(content && content.length) || "0"}/300
        </Text>
      </Row>

      <Spacer y={2} />
    </form>
  );
}
