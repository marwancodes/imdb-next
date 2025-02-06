"use client";

import Link from 'next/link';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

type NavbarItemProps = {
  title: string;
  param: string;
};

const NavbarItem = ({ title, param }: NavbarItemProps) => {
  // Wrap this part with Suspense
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarItemContent title={title} param={param} />
    </Suspense>
  );
};

const NavbarItemContent = ({ title, param }: NavbarItemProps) => {
  const searchParam = useSearchParams();
  const genre = searchParam.get('genre');

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
