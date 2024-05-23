'use client'
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
  export default function AccordionDemo() {
    return (
        <div className="w-full flex justify-center">
        <div className="w-1/2">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Adakah ini event scammer?</AccordionTrigger>
          <AccordionContent>
            tak nie bukan scammer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Apa potensi lepas sendiri?</AccordionTrigger>
          <AccordionContent>
            boleh jadi mutawif.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>berapa ticket untuk masuk program?</AccordionTrigger>
          <AccordionContent>
            rm2
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </div>
    )
  }