'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Navbar from '@/widgets/navbar/ui';
import Footer from '@/widgets/footer/ui';

type Props = {
    children: ReactNode;
};

export default function ClientLayout({ children }: Props) {
    const pathname = usePathname();

    // Exclude Navbar and Footer for the login page
    const isExcludedPage = ['/auth', '/auth/confirm'].some(page => pathname.includes(page));
    return (
        <>
            {!isExcludedPage && <Navbar />}
            {children}
            {!isExcludedPage && <Footer />}
        </>
    );
}