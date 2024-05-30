'use client';

import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { useUserService } from '_services';
import { Spinner } from '_components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ChevronDownIcon, PlusIcon, PlusCircleIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import CardItem from '../_components/CardItem';
import BoardData from '.././lib/data/board-data.json';
import Layout from '_components/Layout';
import Image from "next/image";
import './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default Home;

function createGuidId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function Home() {
    const userService = useUserService();
    const user = userService.currentUser;
    const [ready, setReady] = useState(false);
    const [boardData, setBoardData] = useState(BoardData);
    const [showForm, setShowForm] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState(0);
    const today = new Date();
    const [cardId, setCardId] = useState(0);
    const [date, setDate] = useState(new Date());
    const [limitDate, setLimitDate] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState("");
    const [complete, setComplete] = useState(0);
    const [state, setState] = useState(0);
    enum State {
        Iniciada,
        Progreso,
        Completada
    }
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: new Date(),
        complete: 0,
        state: ""
    });
    const handleInput = (e: any) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }
    const addCardId1 = (id: number) => {
        setCardId(id);
        let lista: any;
        boardData.filter((data) => {
            lista = data.items.filter((d, i) => {
                return (d.id != id);
            })
            data.items = lista;
            return data;
        })
    }

    useEffect(() => {
        userService.getCurrent();
        if (process.browser) {
            setReady(true);
        }
    }, []);

    const submitForm = (e: any) => {
        // We don't want the page to refresh
        e.preventDefault()

        const formURL = e.target.action
        const data = new FormData()

        // Turn our formData state into data we can use with a form submission
        // Object.entries(formData).forEach(([key, value]) => {
        //     data.append(key, value);
        // })
        formData.complete = complete;
        formData.date = date;
        formData.state = State[state];

        //create new card item
        createNewItemCard();

        // POST the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
                'accept': 'application/json',
            },
        }).then(() => {
            setFormData({
                title: "",
                description: "",
                date: new Date(),
                complete: 0,
                state: ""
            })
            setFormSuccess(true)
        })
    };

    const handleChange = () => {
        setComplete((complete === 0) ? 1 : 0);
    };

    const onChange = (event: any) => {
        const value = event.target.value;
        setState(value);
    };

    const onDragEnd = (re: any) => {
        if (!re.destination) return;
        let newBoardData = boardData;
        var dragItem =
            newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
        newBoardData[parseInt(re.source.droppableId)].items.splice(
            re.source.index,
            1
        );
        newBoardData[parseInt(re.destination.droppableId)].items.splice(
            re.destination.index,
            0,
            dragItem
        );
        setBoardData(newBoardData);
    };

    const createNewItemCard = () => {
        if (formData) {
            //data.keyCode === 13
            const val = formData.description;
            // const val = data.target.value;
            if (val.length === 0) {
                setShowForm(false);
            } else {
                //const boardId = e.target.attributes['data-id'].value;
                const boardId = (formData.complete===1) ? 3 : 0;
                const item = {
                    id: parseInt(createGuidId()),
                    title: val,
                    priority: (limitDate) ? 2 : 0,
                    chat: 0,
                    attachment: 0,
                    assignees: [],
                    complete: formData.complete
                };
                let newBoardData = boardData;
                newBoardData[boardId].items.push(item);
                setBoardData(newBoardData);
                setShowForm(false);
                //e.target.value = '';
            }
        }
    };

    const limit = (selectedDate: any) => {
        let diff = moment(selectedDate).diff(today, 'days');
        setLimitDate(diff <= 1);
    };

    const setStartDate = (e: any) => {
        setDate(e);
        limit(e);
    };

    if (user) {
        return (
            <>
                <Layout>
                    <div className='p-5 flex flex-col h-screen'>
                        {/* Board header */}
                        <div className='flex flex-initial justify-between'>
                            <div className='flex items-center'>
                                <h4 className='text-4xl font-bold text-gray-600'>Task</h4>
                                <button
                                    className='flex justify-center items-center my-3 space-x-2 text-lg cursor-pointer'
                                    onClick={() => {
                                        setSelectedBoard(0);
                                        setShowForm(true);
                                    }}>
                                    <PlusCircleIcon className='w-10 h-10 text-teal-600' />
                                </button>
                            </div>
                            <ul className='flex space-x-3'>
                                <li>
                                    <Image
                                        alt='alt'
                                        src='https://randomuser.me/api/portraits/men/75.jpg'
                                        width='36'
                                        height='36'
                                        objectFit='cover'
                                        className=' rounded-full '
                                    />
                                </li>
                                <li>
                                    <Image
                                        alt='alt'
                                        src='https://randomuser.me/api/portraits/men/76.jpg'
                                        width='36'
                                        height='36'
                                        objectFit='cover'
                                        className=' rounded-full '
                                    />
                                </li>
                                <li>
                                    <Image
                                        alt='alt'
                                        src='https://randomuser.me/api/portraits/men/78.jpg'
                                        width='36'
                                        height='36'
                                        objectFit='cover'
                                        className=' rounded-full '
                                    />
                                </li>
                                <li>
                                    <button
                                        className='border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full'>
                                        <PlusIcon className='w-5 h-5 text-gray-500' />
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Board columns */}
                        {/* 
                         */}
                        {ready && (
                            <DragDropContext onDragEnd={onDragEnd}>
                                <div className='grid grid-cols-4 gap-5 my-5'>
                                    {boardData.map((board, bIndex) => {
                                        return (
                                            <div key={board.name}>
                                                <Droppable droppableId={bIndex.toString()}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            {...provided.droppableProps}
                                                            ref={provided.innerRef}>
                                                            <div
                                                                className={`bg-gray-100 rounded-md shadow-md flex flex-col relative overflow-hidden ${snapshot.isDraggingOver && 'bg-teal-100'}`}>
                                                                <span
                                                                    className='w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-400 absolute inset-x-0 top-0'>
                                                                </span>
                                                                <h4 className=' p-3 flex justify-between items-center mb-2'>
                                                                    <span className='text-2xl text-gray-600'>
                                                                        {board.name}
                                                                    </span>
                                                                    <EllipsisVerticalIcon className='w-5 h-5 text-gray-500' />
                                                                </h4>
                                                                <div
                                                                    className='overflow-y-auto overflow-x-hidden h-auto'
                                                                    style={{ maxHeight: 'calc(100vh - 290px)' }}>
                                                                    {board.items.length > 0 &&
                                                                        board.items.map((item, iIndex) => {
                                                                            return (
                                                                                <CardItem
                                                                                    key={item.id}
                                                                                    data={item}
                                                                                    index={iIndex}
                                                                                    className='m-3'
                                                                                    addCardId={addCardId1}
                                                                                    complete={complete} />
                                                                            );
                                                                        })}
                                                                    {provided.placeholder}
                                                                </div>

                                                                {(showForm && selectedBoard === bIndex) &&
                                                                    <div className='p-3'>
                                                                        <div className="">
                                                                            <form method="POST" onSubmit={submitForm} className="bg-white shadow-md rounded px-8 pt-6 pb-20 mb-4">
                                                                                {/* <p className="text-left text-gray-500 text-xs "> Create Task </p> */}
                                                                                <div className='mb-2'>
                                                                                    <h1 className="leading-tight tracking-tight text-indigo-500 md:text-2xl">
                                                                                        Create Task
                                                                                    </h1>
                                                                                </div>
                                                                                <div className="mb-2 mt-3">
                                                                                    <label className="block text-gray-700 text-sm font-bold mb-1">
                                                                                        Title
                                                                                    </label>
                                                                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 
                                                                                                      text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                                        id="title"
                                                                                        type="text"
                                                                                        name="title"
                                                                                        onChange={handleInput}
                                                                                        value={formData.title}
                                                                                        placeholder="Title" />
                                                                                </div>
                                                                                <div>
                                                                                    <label className="block text-gray-700 text-sm font-bold">
                                                                                        Description
                                                                                    </label>
                                                                                    <textarea
                                                                                        className="shadow appearance-none border border-red-500 rounded 
                                                                                        w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none 
                                                                                        focus:shadow-outline"
                                                                                        name="description"
                                                                                        onChange={handleInput}
                                                                                        value={formData.description}
                                                                                        placeholder="Description...">
                                                                                    </textarea>
                                                                                    {/* <p className="text-red-500 text-xs italic">Please enter description.</p> */}
                                                                                </div>

                                                                                <div className="mb-2">
                                                                                    <DatePicker
                                                                                        dateFormat="d MMMM, yyyy"
                                                                                        id="date"
                                                                                        name="date"
                                                                                        showIcon
                                                                                        minDate={today}
                                                                                        selected={date}
                                                                                        onChange={(e) => setStartDate(e)}
                                                                                    />
                                                                                </div>

                                                                                <div className="mb-2">
                                                                                    <input
                                                                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
                                                                                        id='complete'
                                                                                        type="checkbox"
                                                                                        name="complete"
                                                                                        checked={complete === 0 ?false : true}
                                                                                        onChange={handleChange}
                                                                                    />
                                                                                    <label className='ml-1 mb-2'>Complete</label>
                                                                                </div>

                                                                                <div className="mb-4">
                                                                                    <select onChange={onChange} className="form-select">
                                                                                        <option disabled>
                                                                                            Select State
                                                                                        </option>
                                                                                        <option value="0">No Iniciada</option>
                                                                                        <option value="1">En Progreso</option>
                                                                                        <option value="2">Completada</option>
                                                                                    </select>
                                                                                </div>

                                                                                <div className="mb-1 ml-2 float-right">
                                                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                                                                                                    py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                                                        type="submit">
                                                                                        Create
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    )}
                                                </Droppable>
                                            </div>
                                        );
                                    })}
                                </div>
                            </DragDropContext>
                        )}
                    </div>
                </Layout>
            </>
        );
    } else {
        return <Spinner />;
    }
}
