import React from 'react';
import Image from "next/image";
import { PlusIcon, MinusIcon, ChatBubbleBottomCenterIcon, PaperClipIcon } from '@heroicons/react/24/solid';
import { Draggable } from 'react-beautiful-dnd';
import { TItems } from '../../types';

interface CardItemProps {
  data: TItems;
  index: number;
  className: string;
  addCardId: any;
  complete: number;
}

const CardItem = ({ data, index, className, addCardId }: CardItemProps) => {
  const setCardId = (cardId: any) => {
    addCardId(cardId);
  }
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white rounded-md p-3 m-3 mt-0 last:mb-0 
          ${data.priority === 2 ? 'border-l-4 border-red-500' : ''}
            `}>
          <label
            className={`bg-gradient-to-r px-2 py-1 rounded text-white text-sm
              ${data.priority === 0 ? 'from-sky-600 to-sky-400' : data.priority === 1 ? 'from-teal-600 to-teal-400' : 'from-rose-600 to-rose-400'}
              `}>
            {data.priority === 0 ? 'Low Priority' : data.priority === 1 ? 'Medium Priority' : 'High Priority'}
          </label>
          <div>
            {data.complete === 1 &&
              <label className='text-red-500'>{"complete"}</label>
            }
          </div>
          <h5 className='text-md my-3 text-lg leading-6'>{data.title}</h5>
          <div className='flex justify-between'>
            <div className='flex space-x-2 items-center'>
              <span className='flex space-x-1 items-center'>
                <ChatBubbleBottomCenterIcon className='w-4 h-4 text-gray-500' />
                <span>{data.chat}</span>
              </span>
              <span className='flex space-x-1 items-center'>
                <PaperClipIcon className='w-4 h-4 text-gray-500' />
                <span>{data.attachment}</span>
              </span>
            </div>
            <ul className='flex space-x-3'>
              <li>
                <button className='border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full cursor-pointer'
                  onClick={() => {
                    setCardId(data.id);
                  }}>
                  <MinusIcon className='w-5 h-5 text-teal-500' />
                </button>
              </li>
              <li>
                <button className='border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full'>
                  <PlusIcon className='w-5 h-5 text-amber-500' />
                </button>
              </li>
              {data.assignees.map((ass, index) => {
                return (
                  <li key={index}>
                    <Image
                      alt='Image cover'
                      src={ass.avt}
                      width='36'
                      height='36'
                      objectFit='cover'
                      className=' rounded-full '
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
