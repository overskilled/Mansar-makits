'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from 'lucide-react';

import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import LanguageSelector from '@/components/custom/LanguageSelector';
import { useI18n } from '@/locales/client';
import { useRouter } from 'next/navigation';

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <img
      src="/logo-mansar.png"
      alt="Mansar Logo"
      className="h-8 w-auto sm:h-8 md:h-12 rounded-lg"
    />
  );
};

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// Types
export interface NavbarNavItem {
  href?: string;
  label: string;
  submenu?: boolean;
  type?: 'description' | 'simple' | 'icon';
  items?: Array<{
    href: string;
    label: string;
    description?: string;
    icon?: string;
  }>;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavItem[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks,
      signInText = 'Sign In',
      signInHref = '#signin',
      ctaText = 'Get Started',
      ctaHref = '#get-started',
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    const router = useRouter()

    const t = useI18n();

    // Default navigation links with translations
    const defaultNavigationLinks: NavbarNavItem[] = [
      {
        href: '#',
        type: "icon",
        submenu: true,
        label: t('navbar.product'),
        items: [
          {
            href: "/investement-infrastructure",
            label: t('navbar.productItems.investmentInfrastructure'),
            description: t('navbar.productItems.investmentInfrastructureDesc'),
            icon: "/nav/infrastructure.svg"
          }
        ]
      },
      {
        label: t('navbar.useCases'),
        submenu: true,
        type: 'icon',
        items: [
          {
            href: '/brokers-and-wealth-managers',
            label: t('navbar.useCasesItems.brokersWealthManagers'),
            description: t('navbar.useCasesItems.brokersWealthManagersDesc'),
            icon: '/nav/broker.svg'
          },
          {
            href: '/banks-emis',
            label: t('navbar.useCasesItems.banksEmis'),
            description: t('navbar.useCasesItems.banksEmisDesc'),
            icon: '/nav/bank.svg'
          },
          {
            href: '/software-companies',
            label: t('navbar.useCasesItems.softwareCompanies'),
            description: t('navbar.useCasesItems.softwareCompaniesDesc'),
            icon: '/nav/companies.svg'
          },
        ],
      },
      {
        label: t('navbar.developers'),
        submenu: true,
        type: 'icon',
        items: [
          {
            href: '#',
            label: t('navbar.developersItems.developerHub'),
            description: t('navbar.developersItems.developerHubDesc'),
            icon: '/nav/dev.svg'
          },
          {
            href: '#',
            label: t('navbar.developersItems.guides'),
            description: t('navbar.developersItems.guidesDesc'),
            icon: '/nav/hub.svg'
          },
          {
            href: '#',
            label: t('navbar.developersItems.documentation'),
            description: t('navbar.developersItems.documentationDesc'),
            icon: '/nav/doc.svg'
          },
        ],
      },
      {
        label: t('navbar.company'),
        submenu: true,
        type: 'icon',
        items: [
          {
            href: '/company',
            label: t('navbar.companyItems.company'),
            description: t('navbar.companyItems.companyDesc'),
            icon: '/nav/company.svg'
          },
          {
            href: '/careers',
            label: t('navbar.companyItems.careers'),
            description: t('navbar.companyItems.careersDesc'),
            icon: '/nav/careers.svg'
          },
          {
            href: '/media',
            label: t('navbar.companyItems.media'),
            description: t('navbar.companyItems.mediaDesc'),
            icon: '/nav/media.svg'
          },
          {
            href: '/blog',
            label: t('navbar.companyItems.blog'),
            description: t('navbar.companyItems.blogDesc'),
            icon: '/nav/blog.svg'
          },
        ],
      },
    ];

    const navLinks = navigationLinks || defaultNavigationLinks;

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case 'BookOpenIcon':
          return <BookOpenIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'LifeBuoyIcon':
          return <LifeBuoyIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'InfoIcon':
          return <InfoIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        default:
          return null;
      }
    };

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky h-[15vh] top-3 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-28 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <button
              onClick={(e) => router.push("/")}
              className="flex items-center space-x-2 py-5  hover:text-primary/90 transition-colors cursor-pointer"
            >
              <div className="text-2xl">
                {logo}
              </div>
              <span className="hidden font-meduim text-xl text-black sm:inline-block">Mansar.Makits</span>
            </button>
          </div>

          {/* Center - Navigation menu */}
          {!isMobile && (
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="flex">
                <NavigationMenuList className="gap-1">
                  {navLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      {link.submenu ? (
                        <>
                          <NavigationMenuTrigger>
                            {link.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            {link.type === 'description' && link.label === 'Features' ? (
                              <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <div className="row-span-3">
                                  <NavigationMenuLink asChild>
                                    <button
                                      onClick={(e) => e.preventDefault()}
                                      className="flex h-full w-full select-none flex-col justify-center items-center text-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-pointer"
                                    >
                                      <div className="mb-3 text-xl font-medium">
                                        Mansar.Makits
                                      </div>
                                      <p className="text-sm leading-tight text-muted-foreground">
                                        {t('navbar.tagline')}
                                      </p>
                                    </button>
                                  </NavigationMenuLink>
                                </div>
                                {link.items?.map((item, itemIndex) => (
                                  <ListItem
                                    key={itemIndex}
                                    title={item.label}
                                    href={item.href}
                                    type={link.type}
                                  >
                                    {item.description}
                                  </ListItem>
                                ))}
                              </div>
                            ) : link.type === 'simple' ? (
                              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {link.items?.map((item, itemIndex) => (
                                  <ListItem
                                    key={itemIndex}
                                    title={item.label}
                                    href={item.href}
                                    type={link.type}
                                  >
                                    {item.description}
                                  </ListItem>
                                ))}
                              </div>
                            ) : link.type === 'icon' ? (
                              <div className="grid w-[400px] gap-3 p-4">
                                {link.items?.map((item, itemIndex) => (
                                  <ListItem
                                    key={itemIndex}
                                    title={item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    type={link.type}
                                  >
                                    {item.description}
                                  </ListItem>
                                ))}
                              </div>
                            ) : (
                              <div className="grid gap-3 p-4">
                                {link.items?.map((item, itemIndex) => (
                                  <ListItem
                                    key={itemIndex}
                                    title={item.label}
                                    href={item.href}
                                    type={link.type}
                                  >
                                    {item.description}
                                  </ListItem>
                                ))}
                              </div>
                            )}
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink
                          href={link.href}
                          className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                          onClick={(e) => e.preventDefault()}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}

          {/* Right side - Buttons */}
          <div className="flex items-center gap-3">
            <Button
              size="lg"
              className="text-sm font-medium rounded-xl hover:bg-black hover:text-white hover:cursor-pointer bg-white border border-gray-600 text-black"
              onClick={(e) => {
                e.preventDefault();
                router.push("/contact")
                if (onSignInClick) onSignInClick();
              }}
            >
              {t('navbar.getInTouch')}
            </Button>
            <LanguageSelector />

            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {navLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          {link.submenu ? (
                            <>
                              <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium mt-3">
                                {link.label}
                              </div>
                              <ul>
                                {link.items?.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <button
                                      onClick={(e) => e.preventDefault()}
                                      className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline"
                                    >
                                      {item.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <button
                              onClick={(e) => e.preventDefault()}
                              className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline"
                            >
                              {link.label}
                            </button>
                          )}
                          {/* Add separator between different types of items */}
                          {index < navLinks.length - 1 &&
                            ((!link.submenu && navLinks[index + 1].submenu) ||
                              (link.submenu && !navLinks[index + 1].submenu) ||
                              (link.submenu &&
                                navLinks[index + 1].submenu &&
                                link.type !== navLinks[index + 1].type)) && (
                              <div
                                role="separator"
                                aria-orientation="horizontal"
                                className="bg-border -mx-1 my-1 h-px w-full"
                              />
                            )}
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';

// ListItem component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string;
    href?: string;
    icon?: string;
    type?: 'description' | 'simple' | 'icon';
    children?: React.ReactNode;
  }
>(({ className, title, children, icon, href,  type, ...props }, ref) => {
  const router = useRouter()

  const renderIconComponent = (iconName?: string) => {
    if (!iconName) return null;

    // Check if it's an image path (ends with .svg, .png, .jpg, etc.)
    if (iconName.match(/\.(svg|png|jpg|jpeg|gif|webp)$/i)) {
      return (
        <img
          src={iconName}
          alt=""
          className="h-8 w-8 object-contain"
        />
      );
    }

    // Handle Lucide icons
    switch (iconName) {
      case 'BookOpenIcon':
        return <BookOpenIcon className="h-5 w-5" />;
      case 'LifeBuoyIcon':
        return <LifeBuoyIcon className="h-5 w-5" />;
      case 'InfoIcon':
        return <InfoIcon className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        onClick={() => router.push(href || "#")}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer',
          className
        )}
        {...props}
      >
        {type === 'icon' && icon ? (
          <div className="flex items-start space-x-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              {renderIconComponent(icon)}
            </div>
            <div className="space-y-1">
              <div className="text-base font-medium leading-tight">{title}</div>
              {children && (
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="text-base font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </>
        )}
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = 'ListItem';

export { Logo, HamburgerIcon };