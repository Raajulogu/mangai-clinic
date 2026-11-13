import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbJsonLd } from "./JsonLd";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { name: "Home", url: "https://mangaiclinic.com" },
    ...items.map((it) => ({
      name: it.label,
      url: it.href ? `https://mangaiclinic.com${it.href}` : "https://mangaiclinic.com",
    })),
  ];

  return (
    <>
      <BreadcrumbJsonLd items={schemaItems} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-warm-gray">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-deep-mauve transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-warm-border" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-deep-mauve transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-deep-mauve" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

