"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Spacer,
  User,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";

export default function HomePage({ numStars }: { numStars: string }) {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const { user } = session || {};

  const cardItems = [
    {
      title: "Next.js 14",
      description: "App directory, routing, layouts, and API routes.",
      footer: "Next.js 14 documentation",
      url: "https://beta.nextjs.org/docs",
      svg: (
        <svg viewBox="0 0 24 24" style={{ height: 32 }}>
          <path
            d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
          />
        </svg>
      ),
    },
    {
      title: "React 18",
      description: "Server and client components.",
      footer: "React 18 documentation",
      url: "https://react.dev/learn",
      svg: (
        <svg viewBox="0 0 24 24" style={{ height: 32 }}>
          <path
            d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
            fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
          />
        </svg>
      ),
    },
    {
      title: "TypeScript",
      description: "Type safety and more.",
      footer: "TypeScript documentation",
      url: "https://www.typescriptlang.org/docs",
      svg: (
        <svg
          fill="none"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 32 }}
        >
          <rect
            fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
            height="512"
            rx="50"
            width="512"
          />
          <path
            clipRule="evenodd"
            d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
            fill={theme === "light" ? "#FFFFFF" : "#100F13"}
            fillRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "ORM",
      description: "Object-relational mapping using Prisma.",
      footer: "Prisma documentation",
      url: "https://www.prisma.io/docs/getting-started/quickstart",
      svg: (
        <svg
          fill="currentColor"
          viewBox="0.34 -0.059977834648891726 33.11668247084116 39.96397783464889"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 32 }}
        >
          <path
            d="M32.908 30.475L19.151 1.26a2.208 2.208 0 0 0-1.88-1.257 2.183 2.183 0 0 0-2.01 1.042L.34 25.212a2.26 2.26 0 0 0 .025 2.426L7.66 38.935a2.346 2.346 0 0 0 2.635.969l21.17-6.262a2.32 2.32 0 0 0 1.457-1.258 2.27 2.27 0 0 0-.013-1.91zm-3.08 1.253L11.864 37.04c-.548.163-1.074-.312-.96-.865l6.418-30.731c.12-.575.914-.666 1.165-.134l11.881 25.23a.858.858 0 0 1-.541 1.188z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Database",
      description: "PostgreSQL database deployed on Supabase.",
      footer: "Provision database on Supabase",
      url: "https://supabase.com/dashboard",
      svg: (
        <svg
          viewBox="0 0 109 113"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 32 }}
        >
          <path
            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
            fill="url(#paint1_linear)"
            fillOpacity="0.2"
          />
          <path
            d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
            fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="53.9738"
              y1="54.974"
              x2="94.1635"
              y2="71.8295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={theme === "dark" ? "#b8b8b8" : "#44414d"} />
              <stop
                offset="1"
                stopColor={theme === "dark" ? "#FFFFFF" : "#100F13"}
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="36.1558"
              y1="30.578"
              x2="54.4844"
              y2="65.0806"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Components",
      description:
        "UI components built with NextUI. Dark mode implemented using next-themes.",
      footer: "NextUI documentation",
      url: "https://nextui.org/docs/guide/getting-started",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 374 374"
          style={{ height: 32 }}
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-773 -353)">
            <rect
              id="Rectangle_1"
              data-name="Rectangle 1"
              width="374"
              height="374"
              rx="99"
              transform="translate(773 353)"
              fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M127.309-159.273h14.543V-53.817a55.656,55.656,0,0,1-7.621,29.047A54.131,54.131,0,0,1,113.039-4.627Q99.468,2.722,81.5,2.722q-17.887,0-31.5-7.388A54.429,54.429,0,0,1,28.775-24.809a55.451,55.451,0,0,1-7.621-29.008V-159.273H35.7V-54.828a44.65,44.65,0,0,0,5.677,22.592A40.568,40.568,0,0,0,57.355-16.643q10.3,5.677,24.148,5.677t24.186-5.677a40.232,40.232,0,0,0,15.982-15.593,44.893,44.893,0,0,0,5.638-22.592Zm71.393,0V0H184.159V-159.273Z"
              transform="translate(851 620)"
              fill={theme === "dark" ? "#100F13" : "#FFFFFF"}
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Tailwind CSS",
      description:
        "Utility-first CSS framework enabling rapid and customizable front-end styling.",
      footer: "Tailwind CSS Documentation",
      url: "https://tailwindcss.com/docs",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 54 33"
          style={{ height: 24 }}
        >
          <g clipPath="url(#prefix__clip0)">
            <path
              fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
              fillRule="evenodd"
              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0">
              <path fill="#fff" d="M0 0h54v32.4H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Light & Dark Mode",
      description: "Theme switching implemented using next-themes.",
      footer: "next-themes documentation",
      url: "https://github.com/pacocoursey/next-themes/blob/main/README.md",
      svg:
        theme === "dark" ? (
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 24 24"
            style={{ height: 30 }}
          >
            <path
              d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 24 24"
            style={{ height: 30 }}
          >
            <g fill="currentColor">
              <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
              <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
            </g>
          </svg>
        ),
    },
    {
      title: "Authentication",
      description:
        "OAuth 2.0 authentication through Google, GitHub, and Discord using NextAuth.js.",
      footer: "NextAuth.js documentation",
      url: "https://next-auth.js.org/getting-started/introduction",
      svg: (
        <svg
          viewBox="0 0 24 24"
          // fill="none"
          stroke={theme === "dark" ? "#000000" : "#FFFFFF"}
          strokeWidth="1"
          className="h-12 w-12 fill-current"
          style={{ height: 32 }}
          fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: "OpenAI API",
      description:
        "Uses GPT-3.5-Turbo model from OpenAI to enhance social media posts.",
      footer: "OpenAI API documentation",
      url: "https://platform.openai.com/docs/api-reference",
      svg: (
        <svg
          viewBox="0 0 24 24"
          className="h-12 w-12 fill-current"
          style={{ height: 32 }}
        >
          <path
            d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
            fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
          />
        </svg>
      ),
    },
    {
      title: "Payments",
      description:
        "Paid subscriptions using Stripe unlocking features for users.",
      footer: "Stripe Payment API documentation",
      url: "https://stripe.com/docs/payments",
      svg: (
        <svg
          viewBox="0 0 24 24"
          className="h-12 w-12 fill-current"
          style={{ height: 32 }}
        >
          <path
            d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
            fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <Spacer />

      <div className="space-y-4 text-center">
        <h1 className="pb-2 font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Welcome{user && `, ${user.name}`}!
        </h1>
        <h2 className="text-2xl font-medium">
          This is an app built to showcase the capabilities of Next.js 14.
        </h2>

        <Spacer y={1} />

        <div className="flex flex-wrap space-x-4 justify-center">
          <Button
            className="font-medium bg-gradient-to-r from-pink-500 to-yellow-600 text-white shadow-lg"
            onClick={() =>
              window.open("https://github.com/yaseenmustapha/nextjs14-app")
            }
          >
            Source Code on GitHub
          </Button>

          <Link href="https://github.com/yaseenmustapha/nextjs14-app">
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 pr-2">
              {numStars} stars on GitHub
            </p>
          </Link>
        </div>

        <User
          className="font-medium text-medium"
          name="Yaseen Mustapha"
          description={
            <Link
              className="text-small"
              href="https://github.com/yaseenmustapha"
            >
              github.com/yaseenmustapha
            </Link>
          }
          avatarProps={{
            src: "https://avatars.githubusercontent.com/u/26501999",
          }}
          onClick={() => window.open("https://github.com/yaseenmustapha")}
        />

        <Spacer y={5} />

        <p className="text-3xl font-medium">Features</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mt-4">
        {cardItems.map((item, i) => (
          <div key={i} className="w-full">
            <Card className="h-full p-1">
              <CardHeader>
                <div className="flex items-center">
                  {item.svg}
                  <div className="ml-2 font-bold">{item.title}</div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="mt-2">
                  <p>{item.description}</p>
                </div>
              </CardBody>
              <CardFooter>
                <Link color="primary" target="_blank" href={item.url}>
                  {item.footer}
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
