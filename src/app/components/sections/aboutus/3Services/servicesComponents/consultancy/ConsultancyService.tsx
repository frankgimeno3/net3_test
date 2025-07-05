'use client';
import React, { FC, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { consultancy } from './consultancyContents.json';
import { useRouter } from 'next/navigation';
import ActionButton from '@/app/components/sections/ActionButton';
import Image from "next/image";

interface ConsultancyServiceProps { }

const ConsultancyService: FC<ConsultancyServiceProps> = () => {
  const { lang } = useLanguage();
  const content = consultancy[lang];
  const router = useRouter();

  const handleContactRedirection = () => {
    router.push('/contact');
  };

  const [selectedQuestion, setSelectedQuestion] = useState<string>('none');
  const handleSelectedQuestion = (id: string) => {
    setSelectedQuestion(prev => (prev === id ? 'none' : id));
  };

  return (
    <div className="flex flex-col max-w-5xl  py-12">
      <h2 className="text-left text-3xl md:text-6xl font-bold mb-12">{content.title}</h2>

      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-row w-full justify-between items-start">
          <div className="flex flex-col ">
            <div className="flex flex-col max-w-lg mr-12 gap-3 pt-3">
              <p className="text-lg leading-relaxed">
                {content.paragraph_1.key_1}
                <span className="">
                  {' '}{content.paragraph_1.key_span_1}{' '}
                </span>
                {content.paragraph_1.key_2}
              </p>
              <ActionButton
                label={lang === 'ENG' ? 'Want to know more?' : '¿Quieres saber más?'}
                onClick={handleContactRedirection}
                align="left"
              />
            </div>
          </div>
          <div className=" hidden md:block relative "
            style={{ "width": "450px", "height": "450px" }}>
            <Image
              src={"/contentImages/4consulting.png"}
              layout="fill"
              objectFit="contain"
              alt={`s1`}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-row w-full justify-between items-start">
          <div className="flex flex-col ">
            <div className="flex flex-col max-w-lg mr-12 gap-3 pt-3">
              <p className="text-lg leading-relaxed">
                {content.paragraph_2.key_1}
                <span className="">
                  {' '}{content.paragraph_2.key_span_1}{' '}
                </span>
                {content.paragraph_2.key_2}
                <span className="">
                  {' '}{content.paragraph_2.key_span_2}{' '}
                </span>
                {content.paragraph_2.key_3}
              </p>
              <ActionButton
                label={lang === 'ENG' ? 'Want to know more?' : '¿Quieres saber más?'}
                onClick={handleContactRedirection}
                align="left"
              />
            </div>
          </div>
          <div className=" hidden md:block relative "
            style={{ "width": "450px", "height": "450px" }}>
            <Image
              src={"/contentImages/5orderfolders.png"}
              layout="fill"
              objectFit="contain"
              alt={`s2`}
              className="rounded-xl"
            />
          </div>        </div>

        <div className="flex flex-row w-full justify-between items-start">
          <div className="flex flex-col ">
            <div className="flex flex-col max-w-lg mr-12 gap-3 pt-3">
              <p className="text-lg leading-relaxed">
                {content.paragraph_3.key_1}
                <span className="">
                  {' '}{content.paragraph_3.key_span_1}{' '}
                </span>
                {content.paragraph_3.key_2}
              </p>
              <ActionButton
                label={lang === 'ENG' ? 'Want to know more?' : '¿Quieres saber más?'}
                onClick={handleContactRedirection}
                align="left"
              />
            </div>
          </div>
          <div className=" hidden md:block relative "
            style={{ "width": "450px", "height": "450px" }}>
            <Image
              src={"/contentImages/6entregaas.png"}
              layout="fill"
              objectFit="contain"
              alt={`s2`}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-3">
        {content.faq.map(({ id, title, answer }) => (
          <div
            key={id}
            className="flex flex-row rounded-r mb-2 rounded-xl"
            onClick={() => handleSelectedQuestion(id)}
          >
            <div className='flex flex-col w-full '>
              <div className="flex flex-row justify-between items-center bg-indigo-500 w-full pr-8 cursor-pointer ">
                <p className="p-5 text-lg font-medium pl-8">{title}</p>
                <div className="ml-2">
                  {selectedQuestion === id ? (
                    <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 inline transform rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {selectedQuestion === id && (
                <div className="flex py-3 bg-gray-100  text-gray-500 rounded-b-xl mb-3 ">
                  <p className="text-left px-8 pb-3 py-2  ">{answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultancyService;
