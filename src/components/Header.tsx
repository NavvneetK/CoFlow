import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'


const Header = ({children, className}:HeaderProps) => {
  return (
    <div className={cn('header',className)}>
        <Link href='/' className='flex flex-row'>
            <Image
                src="/assets/images/logo-icon-img.png" alt='CoFlow  name' width={100} height={22}
                // className=' '
            />
            <Image
                src="/assets/images/logo-name.png" alt='CoFlow Logo' width={100} height={22}
                // className='mr-2'
            />
        </Link>
        {children}
      
    </div>
  )
}

export default Header
