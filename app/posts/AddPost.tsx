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
        isInvalid={error}
        errorMessage={error && errorMessage}
        className="mt-6"
        size="lg"
        variant="bordered"
        labelPlacement="outside"
        isDisabled={!session || enhancing}
        label={session ? "Write your thoughts:" : "Please sign in to post."}
        placeholder={session ? "Enter your amazing ideas..." : ""}
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
          isDisabled={!session || enhancing}
          // auto
          style={{ minWidth: "100px" }}
        >
          {loading ? <Spinner size="sm" /> : "Post"}
        </Button>

        <Popover
          isOpen={enhanceError}
          onOpenChange={enhanceError ? setEnhanceError : undefined}
          placement="right"
        >
          <PopoverTrigger>
            <Button
              // color="gradient"
              isDisabled={!session || enhancing}
              style={{ marginLeft: 10, minWidth: "150px" }}
              onClick={enhanceWithAI}
              // auto
              // shadow
              className="font-medium bg-gradient-to-r from-pink-700 to-purple-600 text-white shadow-lg"
            >
              {enhancing ? <Spinner size="sm" /> : "Enhance with AI 😎"}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="p-2">Error enhancing post. Please try again.</p>
          </PopoverContent>
        </Popover>

        <p className="ml-auto">{(content && content.length) || "0"}/300</p>
      </div>

      <Spacer y={2} />
    </form>
  );
}
