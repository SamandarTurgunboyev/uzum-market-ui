import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { CategoryFilter } from '@/widgets/category/lib/model';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  data: CategoryFilter[];
}

const CategoriesCardMobile: FC<Props> = ({ data }) => {
  return (
    <div className="min-lg:hidden bg-white shadow p-2 h-full">
      <Accordion type="multiple" className="bg-gar">
        {data.map((filter) => (
          <AccordionItem value={filter.value} key={filter.value}>
            <AccordionTrigger>{filter.label}</AccordionTrigger>
            <AccordionContent className="pl-10 pr-10">
              <Accordion type="multiple">
                {filter.items.map((sub) => (
                  <AccordionItem value={sub.value} key={sub.value}>
                    <AccordionTrigger>{sub.label}</AccordionTrigger>
                    <AccordionContent className="pl-4 flex flex-col gap-2">
                      {sub.items.map((item) => (
                        <Link
                          href={`/products/${item.label}`}
                          key={item.value}
                          className="text-sm text-muted-foreground hover:text-blue-700 "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CategoriesCardMobile;
