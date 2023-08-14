import prisma from "./prisma";

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
      likes: true,
      comments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return posts;
};

export const getSinglePost = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
      likes: true,
      comments: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: true,
        },
      },
    },
  });
  return post;
};
