"use client";
import { useSession } from "next-auth/react";
import { formatDate } from "@/lib/utils";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Comment, Like, User } from "@prisma/client";

const HeartIcon = ({ fill, onClick }: { fill: boolean; onClick: Function }) => {
  const [hover, setHover] = useState(false);
  return (
    <svg
      style={{ cursor: "pointer" }}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill ? "#F31260" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill || hover ? "#F31260" : "#9ba1a6"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DeleteIcon = ({ onClick }: { onClick: Function }) => {
  const [hover, setHover] = useState(false);
  return (
    <svg
      style={{ marginLeft: "auto", cursor: "pointer" }}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
        fill="#200E32"
        stroke={hover ? "#F31260" : "#9ba1a6"}
      />
    </svg>
  );
};

export default function Post({
  id,
  userId,
  subscriptionStatus,
  name,
  avatar,
  createdAt,
  content,
  likes,
  comments,
}: {
  id: string;
  userId: string;
  subscriptionStatus: string | null;
  name: string | null;
  avatar: string | null;
  createdAt: string;
  content: string;
  likes: Like[];
  comments: {
    id: string;
    user: User;
    createdAt: string;
    content: string;
  }[];
}) {
  const { data: session } = useSession();
  const { user } = session || {};
  const isSubscribed = subscriptionStatus === "active";
  const currentUserLiked =
    (session && likes.some((like) => like.userId === user?.id)) || false;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const segment = useSelectedLayoutSegment();

  function linkify(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const splitText = text.split(urlRegex);
    const jsxElements = splitText.map((s, i) => {
      if (s.match(urlRegex)) {
        return (
          <a href={s} target="_blank" rel="noopener noreferrer" key={i}>
            {s}
          </a>
        );
      }
      return <span key={i}>{s}</span>;
    });
    return jsxElements;
  }

  const linkifiedContent = linkify(content);

  const addLike = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/addLike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: id,
        }),
      });
      if (res.ok) {
        router.refresh();
      }
    } catch {
      // console.log("Error liking post");
    }
    setLoading(false);
  };

  const deletePost = async (postId: string, onClose: () => void) => {
    setDeleteLoading(true);
    try {
      const res = await fetch("/api/deletePost", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });

      if (res.ok) {
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
    setDeleteLoading(false);
    segment === "posts" ? router.refresh() : router.push("/posts"); // if on posts page, refresh, else redirect to posts page
  };

  return (
    <>
      <Card className="p-2 mt-4">
        <CardHeader>
          {isSubscribed ? (
            <Badge
              disableOutline
              content="PRO"
              size="md"
              color="primary"
              className="font-bold text-xs py-1 px-2"
            >
              <Avatar
                src={avatar || undefined}
                color="primary"
                isBordered={userId === user?.id}
              />
            </Badge>
          ) : (
            <Avatar
              src={avatar || undefined}
              color="primary"
              isBordered={userId === user?.id}
            />
          )}
          <Spacer x={0.5} />
          <div className="pl-4">
            <div className="font-bold">{name}</div>
            <div className="text-small text-default-500">
              {formatDate(createdAt)}
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <p>{linkifiedContent}</p>
        </CardBody>
        <CardFooter>
          <Link href={`/posts/${id}`}>
            <p className="text-default-500">
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </p>
          </Link>
          <Spacer x={3} />
          {loading ? (
            <Spinner size="sm" color="danger" />
          ) : (
            <HeartIcon
              fill={currentUserLiked}
              onClick={() => session && addLike(id)}
            />
          )}
          <Spacer x={0.5} />
          <p className={currentUserLiked ? "text-red-500" : "text-default-500"}>
            {likes.length}
          </p>
          {userId === user?.id && <DeleteIcon onClick={onOpen} />}
        </CardFooter>
      </Card>
      <Spacer y={1} />

      <Modal
        closeButton
        aria-labelledby="modal-title"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <p className="text-xl" id="modal-title">
                  Are you sure you want to delete this post?
                </p>
              </ModalHeader>
              <ModalFooter>
                <Button variant="flat" onClick={onClose}>
                  Cancel
                </Button>
                <Button color="danger" onClick={() => deletePost(id, onClose)}>
                  {deleteLoading ? <Spinner size="sm" /> : "Delete"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
