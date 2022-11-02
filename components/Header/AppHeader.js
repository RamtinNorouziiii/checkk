import Nav1 from "../../public/nav1.png";
import Nav2 from "../../public/nav2.png";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/favicon.ico";
import { useEffect, useState } from "react";
import { instance } from "../../utils/axios/index";
export default function AppHeaderComponent() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const [navTop, setNavTop] = useState(0);
  const [pathName, setPathName] = useState();
  const [data, setData] = useState();
  const handleScroll = () => {
    setNavTop(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      setPathName(window.location.pathname);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });
  useEffect(() => {
    instance
      .get("/mainpage")
      .then((res) => {
        setData(res.items && res.items.alias);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box className="App" dir="rtl">
      <Flex
        style={{ transition: "1s all" }}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        h={navTop === 0 ? "60px" : "80px"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        top={{
          base:
            router.pathname === "/" ? (navTop === 0 ? "85px" : "0px") : "0px",
          md:
            router.pathname === "/" ? (navTop === 0 ? "150px" : "0px") : "0px",
        }}
        position="fixed"
        width="100%"
        zIndex={20}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link href="/">
              <Box width="290px">
                <Image alt="آتیه خواهان" src={navTop === 0 ? Nav1 : Nav2} />
              </Box>
            </Link>
          </Box>

          <Flex width="100%" display={{ base: "none", md: "none", lg: "flex" }}>
            <DesktopNav data={data} />
          </Flex>
        </Flex>
        <Box
          textAlign={"left"}
          display={{ base: "none", md: "block" }}
          w="400px"
        ></Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ data }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack textAlign={"right"} m={"auto"} direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.title}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                w={6}
                h={6}
              />
            )}
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.length === 0
                    ? data &&
                      data
                        .filter((el) => el.isMain === false)
                        .sort((a, b) => {
                          return a.sort - b.sort;
                        })
                        .map((child) => (
                          <DesktopSubNav
                            key={child.title}
                            {...child}
                            length={navItem.children.length}
                          />
                        ))
                    : navItem.children.map((child) => (
                        <DesktopSubNav
                          key={child.title}
                          {...child}
                          dataSherkats={data}
                        />
                      ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = (mainData) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box>
      <Popover trigger={"hover"} placement={"left-start"}>
        <PopoverTrigger>
          <Link
            href={
              mainData.length === 0
                ? `/alias/${mainData._id}`
                : mainData.webLink
            }
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
          >
            <Stack direction={"row"} align={"center"}>
              {mainData.children && (
                <Icon
                  as={ChevronDownIcon}
                  transition={"all .25s ease-in-out"}
                  w={6}
                  h={6}
                />
              )}
              {mainData.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {
                      //@ts-ignore
                      mainData.dataSherkats &&
                        mainData.dataSherkats
                          .filter(
                            //@ts-ignore
                            (el) => el.isMain === false
                          )
                          .sort((a, b) => {
                            return a.sort - b.sort;
                          })
                          .map((res1, index1) => {
                            return (
                              <Link
                                style={{
                                  textDecoration: "none",
                                  lineHeight: 2,
                                }}
                                href={`/alias/${res1._id}`}
                                key={index1}
                              >
                                <Text
                                  _hover={{ color: "pink.400", bg: "pink.50" }}
                                >
                                  {res1.title}
                                </Text>
                              </Link>
                            );
                          })
                    }
                  </Stack>
                </PopoverContent>
              )}
              <Box>
                <Text
                  transition={"all .3s ease"}
                  _groupHover={{ color: "pink.400" }}
                  fontWeight={500}
                >
                  {mainData.title}
                </Text>
              </Box>
              <Flex
                transition={"all .3s ease"}
                transform={"translateX(-10px)"}
                opacity={0}
                _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                justify={"flex-end"}
                align={"center"}
                flex={1}
              >
                <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
              </Flex>
            </Stack>
          </Link>
        </PopoverTrigger>
      </Popover>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "صفحه اصلی",
    href: "/",
  },
  {
    label: "درباره ما",
    children: [
      {
        title: "درباره شرکت",
        webLink: "/aboutus",
      },
      {
        title: " سرمایه و ترکیب سهامداران ",
        webLink: "/shareholders",
      },
      {
        title: " هیات مدیره  ",
        webLink: "/managers",
      },
      {
        title: " چارت سازمانی ",
        webLink: "/chartsazmani",
      },
      {
        title: " سخن مدیرعامل",
        webLink: "/ceo",
      },
    ],
  },
  ,
  {
    label: "سرمایه گذاری ها",

    children: [
      {
        title: "سرمایه گذاری در سهام سایر  شرکت ها",
        webLink: "/company-investment",
      },
      {
        title: " سرمایه گذاری  های سریع المعامله در بازار",
        webLink: "/stock-investment",
      },
      {
        title: " سرمایه گذاری در شرکت های فرعی",
        children: [],
      },
    ],
  },
  {
    label: "خبر ها",
    href: "/#news",
  },
  {
    label: "ماموریت ",
    href: "/#vision",
  },

  {
    label: "تماس با ما",
    href: "/contactus",
  },
];
