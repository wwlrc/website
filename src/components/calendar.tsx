"use client";

import { useState, useEffect, useCallback } from 'react'
import { getEvents } from '@/spanner/events';

export default function SpannerCalendar({ staticEvents }: any) {
    const [events, setEvents] = useState(staticEvents)
    
    const updateEvents = () => {
        getEvents().then((events) => {
            setEvents(events)
        })
    }

    useEffect(() => {
        updateEvents()

        const intervalId = setInterval(() => {
            updateEvents()
        }, 60*1000)

        return () => clearInterval(intervalId); 
    }, [])

    if(!events) return <p>No Events :/</p>
    return (<div>
            {events.map((event: any, id: number) => (
                <p key={id}>{event.name}</p>
            ))}
        </div>
    )
}